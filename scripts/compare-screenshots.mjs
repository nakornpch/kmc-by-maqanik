import fs from "node:fs/promises";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const directory = path.resolve(import.meta.dirname, "../reference/screenshots");
const pairs = process.argv.slice(2);
const results = [];
for (const name of pairs.length ? pairs : ["desktop", "full-desktop", "mobile"]) {
  const original = PNG.sync.read(await fs.readFile(path.join(directory, `original-${name}.png`)));
  const local = PNG.sync.read(await fs.readFile(path.join(directory, `local-${name}.png`)));
  if (original.width !== local.width || original.height !== local.height) throw new Error(`${name}: viewport dimensions differ`);
  const { width, height } = original;
  const diff = new PNG({ width, height });
  const changedPixels = pixelmatch(original.data, local.data, diff.data, width, height, { threshold: 0.1 });
  await fs.writeFile(path.join(directory, `diff-${name}.png`), PNG.sync.write(diff));
  results.push({ name, width, height, changedPixels, totalPixels: width * height, matchedPercent: 100 * (1 - changedPixels / (width * height)) });
}
await fs.writeFile(path.join(directory, "comparison.json"), JSON.stringify({ threshold: 0.1, results }, null, 2));
console.log(JSON.stringify(results, null, 2));
