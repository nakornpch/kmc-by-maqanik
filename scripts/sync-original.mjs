import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { parse as parseHtml } from "parse5";
import { parse as parseJs } from "@babel/parser";
import traverseModule from "@babel/traverse";
import postcss from "postcss";

const traverse = traverseModule.default || traverseModule;
const origin = "https://kmc-hospital.com";
const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");
const seen = new Set();
const pending = new Set();
const manifest = [];
const failures = [];
const extensions = /\.(?:js|css|png|jpe?g|webp|svg|ico|mp4|woff2?|ttf|avif)(?:\?.*)?$/;
const photoName = /^(?:chinese|hospital|hydro|physio|sleep|thai)\/[a-z0-9-]+$/;

function enqueue(value, base = origin) {
  if (typeof value !== "string" || !extensions.test(value)) return;
  const url = new URL(value, base);
  if (url.origin !== origin || seen.has(url.href)) return;
  pending.add(url.href);
}

function inspectString(value, base) {
  if (value.startsWith("assets/")) enqueue(`/${value}`);
  else if (/^(?:\/|\.\/)/.test(value)) enqueue(value, base);
  if (photoName.test(value)) {
    enqueue(`/images/photos/${value}.webp`);
    enqueue(`/images/photos/${value}-sm.webp`);
  }
}

function inspectHtml(node) {
  for (const attribute of node.attrs || []) {
    if (["src", "href", "poster"].includes(attribute.name)) enqueue(attribute.value);
    if (attribute.name === "srcset") {
      for (const item of attribute.value.split(",")) enqueue(item.trim().split(/\s+/)[0]);
    }
  }
  for (const child of node.childNodes || []) inspectHtml(child);
}

async function fetchFile(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(60000) });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const data = Buffer.from(await response.arrayBuffer());
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("text/html")) throw new Error(`Unexpected HTML: ${url}`);
  const relative = decodeURIComponent(new URL(url).pathname).replace(/^\//, "");
  const target = path.resolve(publicDir, relative);
  if (!target.startsWith(publicDir + path.sep)) throw new Error("Invalid asset path");
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, data);
  manifest.push({ url, file: relative, bytes: data.length, sha256: crypto.createHash("sha256").update(data).digest("hex") });
  if (relative.endsWith(".js")) {
    const ast = parseJs(data.toString(), { sourceType: "module" });
    traverse(ast, {
      StringLiteral({ node }) { inspectString(node.value, url); },
      TemplateLiteral({ node }) {
        if (!node.expressions.length) inspectString(node.quasis[0].value.cooked, url);
      },
    });
  }
}

const html = await fs.readFile(path.join(root, "../kmc-homepage-clone/index.html"), "utf8");
inspectHtml(parseHtml(html));
while (pending.size) {
  const batch = [...pending].slice(0, 6);
  batch.forEach((url) => { pending.delete(url); seen.add(url); });
  const results = await Promise.allSettled(batch.map(fetchFile));
  results.forEach((result) => { if (result.status === "rejected") failures.push(String(result.reason)); });
  console.log(`Saved ${manifest.length} original assets; ${pending.size} pending`);
}

// Keep the original font families and unicode subsets, with local font URLs.
const stylesheet = manifest.find((entry) => /assets\/index-.*\.css$/.test(entry.file));
const css = await fs.readFile(path.join(publicDir, stylesheet.file), "utf8");
const cssTree = postcss.parse(css);
const fontImports = [];
cssTree.walkAtRules("import", (rule) => {
  const url = rule.params.match(/["'](https:\/\/fonts\.googleapis\.com\/[^"']+)["']/)?.[1];
  if (url) fontImports.push({ rule, url });
});
for (const { rule, url } of fontImports) {
  const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36" } });
  if (!response.ok) throw new Error(`Font CSS: ${response.status}`);
  const fontTree = postcss.parse(await response.text());
  const declarations = [];
  fontTree.walkDecls("src", (declaration) => declarations.push(declaration));
  for (const declaration of declarations) {
    const fontUrl = declaration.value.match(/url\((https:[^)]+)\)/)?.[1];
    if (!fontUrl) continue;
    const name = path.basename(new URL(fontUrl).pathname);
    const fontResponse = await fetch(fontUrl);
    if (!fontResponse.ok) throw new Error(`Font download: ${fontResponse.status}`);
    const buffer = Buffer.from(await fontResponse.arrayBuffer());
    await fs.mkdir(path.join(publicDir, "fonts"), { recursive: true });
    await fs.writeFile(path.join(publicDir, "fonts", name), buffer);
    declaration.value = declaration.value.replace(fontUrl, `/fonts/${name}`);
  }
  await fs.mkdir(path.join(root, "src/styles"), { recursive: true });
  await fs.writeFile(path.join(root, "src/styles/fonts.css"), fontTree.toString());
  rule.remove();
}
await fs.writeFile(path.join(root, "src/styles/original.css"), cssTree.toString());
await fs.mkdir(path.join(root, "reference"), { recursive: true });
await fs.writeFile(path.join(root, "reference/asset-manifest.json"), JSON.stringify({ origin, downloadedAt: new Date().toISOString(), files: manifest, failures }, null, 2));
console.log(JSON.stringify({ downloaded: manifest.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
