import fs from "node:fs/promises";
import path from "node:path";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";
import generateModule from "@babel/generator";
import * as t from "@babel/types";
import { format } from "prettier";

const traverse = traverseModule.default || traverseModule;
const generate = generateModule.default || generateModule;
const root = path.resolve(import.meta.dirname, "..");
const assets = path.join(root, "public/assets");
const files = (await fs.readdir(assets)).filter((file) => file.endsWith(".js"));
const vendorPattern = /^(react-|i18n-|motion-|animejs-|gsap-|rolldown-runtime-|lottie_light-)/;
const entry = files.find((file) => /^index-/.test(file));
const targets = new Map(files.map((file) => [file, vendorPattern.test(file)
  ? `vendor/${file}`
  : file === entry ? "site.jsx" : `routes/${file.replace(/-[A-Za-z0-9_-]{8}\.js$/, "")}.jsx`]));

function relativeImport(from, to) {
  const relative = path.posix.relative(path.posix.dirname(from), to);
  return relative.startsWith(".") ? relative : `./${relative}`;
}

const names = {
  E: "React", i: "useTranslation", l: "Link", o: "useLocation", a: "Outlet",
  c: "Navigate", p: "Routes", u: "Route", m: "BrowserRouter", fe: "ReactDOM",
  v: "languageFromPath", x: "languageBasename", ae: "useHomeMeta",
  S: "useReducedMotion", ce: "AnimatePresence", le: "motion", M: "jsxRuntime",
  Ae: "Header", Me: "Footer", Ge: "Hero", Ue: "SiteLayout", Sn: "SiteRoutes",
  Ve: "CookieConsent", ze: "FloatingContact", Be: "ScrollProgress",
  xe: "LanguageMenu", Se: "MobileLanguageMenu", be: "ChevronIcon", ye: "useLanguageSwitch",
  Ce: "HealthIcon", we: "TherapyIcon", Te: "CareIcon", Ee: "PreventionIcon", Oe: "ServiceIcon",
  H: "RevealSection", L: "AnimatedHeading", V: "Photo", U: "useStaggerReveal",
  Ke: "useScrollReveal", Jt: "HomePage", st: "P4Section", ct: "TeamSection",
  ut: "CareNeeds", at: "ServicesOverview", it: "ServiceCategoryCard",
  _t: "HealthMonitoring", yt: "IntegratedCare", xt: "CorporateCommunity",
  Ct: "NewsSection", ht: "HospitalBackdrop", wt: "ParallaxGallery", qt: "PackageCard",
  Ot: "ContactButtons", Dt: "ContactButton", Ht: "trustPoints", Wt: "amenities",
  Ut: "facilityPhotos", Gt: "featuredPackageIds", Mt: "packages", Kt: "visitSteps",
  A: "serviceGroups", j: "services", X: "phoneNumber", D: "lineUrl", ot: "p4Items",
  lt: "careNeeds", rt: "servicePhotos", vt: "careDisciplines", bt: "communityPrograms",
  St: "newsItems", We: "heroVideo", ke: "navigationItems", N: "languages",
};
const extractedNames = new Set([
  "Header", "Footer", "Hero", "HomePage", "P4Section", "TeamSection", "CareNeeds",
  "ServicesOverview", "ServiceCategoryCard", "HealthMonitoring", "IntegratedCare",
  "CorporateCommunity", "NewsSection", "PackageCard", "CookieConsent", "FloatingContact",
]);

function jsxCall(node) {
  if (!t.isCallExpression(node)) return false;
  const callee = t.isSequenceExpression(node.callee) ? node.callee.expressions.at(-1) : node.callee;
  return t.isMemberExpression(callee) && ["jsx", "jsxs"].includes(callee.property.name);
}
function jsxName(node) {
  if (t.isIdentifier(node)) return t.jsxIdentifier(node.name);
  if (t.isStringLiteral(node)) return t.jsxIdentifier(node.value);
  if (t.isTemplateLiteral(node) && !node.expressions.length) return t.jsxIdentifier(node.quasis[0].value.cooked);
  if (t.isMemberExpression(node) && !node.computed) return t.jsxMemberExpression(jsxName(node.object), jsxName(node.property));
  return null;
}
function childrenOf(node) {
  if (!node) return [];
  if (t.isArrayExpression(node) && node.elements.every((element) => element && !t.isSpreadElement(element))) {
    return node.elements.flatMap(childrenOf);
  }
  return [t.isJSXElement(node) || t.isJSXFragment(node) ? node : t.jsxExpressionContainer(node)];
}
function convertJsx(ast) {
  // Lowercase variables used as element types must remain components in JSX.
  traverse(ast, {
    CallExpression(p) {
      if (!jsxCall(p.node)) return;
      const tag = p.node.arguments[0];
      if (t.isIdentifier(tag) && /^[a-z]/.test(tag.name)) {
        const binding = p.scope.getBinding(tag.name);
        if (binding) binding.scope.rename(tag.name, binding.scope.generateUidIdentifier("Element").name);
      }
    },
  });
  traverse(ast, {
    CallExpression: { exit(p) {
      if (!jsxCall(p.node)) return;
      const [tag, props, key] = p.node.arguments;
      const name = jsxName(tag);
      if (!name || !t.isObjectExpression(props)) return;
      if (props.properties.some((property) => t.isObjectMethod(property) || property.computed)) return;
      const attributes = [];
      let children = [];
      if (key) attributes.push(t.jsxAttribute(t.jsxIdentifier("key"), t.jsxExpressionContainer(key)));
      for (const property of props.properties) {
        if (t.isSpreadElement(property)) { attributes.push(t.jsxSpreadAttribute(property.argument)); continue; }
        const keyName = property.key.name || property.key.value;
        if (keyName === "children") { children = childrenOf(property.value); continue; }
        attributes.push(t.jsxAttribute(t.jsxIdentifier(keyName), t.jsxExpressionContainer(property.value)));
      }
      const selfClosing = children.length === 0;
      p.replaceWith(t.jsxElement(t.jsxOpeningElement(name, attributes, selfClosing), selfClosing ? null : t.jsxClosingElement(t.cloneNode(name)), children, selfClosing));
    } },
  });
}

async function writeSource(file, ast) {
  const target = path.join(root, "src", file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, await format(generate(ast, { comments: true }).code, { parser: "babel", printWidth: 100 }));
}

for (const file of files) {
  const target = targets.get(file);
  const original = await fs.readFile(path.join(assets, file), "utf8");
  if (vendorPattern.test(file)) {
    await fs.mkdir(path.join(root, "src/vendor"), { recursive: true });
    await fs.writeFile(path.join(root, "src", target), original);
    continue;
  }
  const ast = parse(original, { sourceType: "module" });
  let program;
  traverse(ast, { Program(p) { program = p; } });
  const preloaders = new Set();
  for (const node of ast.program.body) {
    if (t.isImportDeclaration(node) && /react-/.test(node.source.value)) {
      for (const specifier of node.specifiers) if (specifier.imported?.name === "f") preloaders.add(specifier.local.name);
    }
  }
  traverse(ast, {
    CallExpression(p) {
      if (t.isIdentifier(p.node.callee) && preloaders.has(p.node.callee.name)) {
        const loader = p.node.arguments[0];
        if (t.isArrowFunctionExpression(loader) && t.isCallExpression(loader.body) && t.isImport(loader.body.callee)) p.replaceWith(loader.body);
      }
    },
    StringLiteral(p) {
      const name = path.posix.basename(p.node.value);
      if (targets.has(name) && /^\.\//.test(p.node.value)) p.node.value = relativeImport(target, targets.get(name));
    },
    TemplateLiteral(p) {
      if (p.node.expressions.length) return;
      const value = p.node.quasis[0].value.cooked;
      const name = path.posix.basename(value);
      if (targets.has(name) && /^\.\//.test(value)) p.replaceWith(t.stringLiteral(relativeImport(target, targets.get(name))));
    },
  });
  if (file === entry) {
    for (const [from, to] of Object.entries(names)) if (program.scope.hasOwnBinding(from)) program.scope.rename(from, to);
    // Mount in src/main.jsx so this module remains editable application code.
    ast.program.body = ast.program.body.map((node) => {
      if (t.isExpressionStatement(node) && t.isSequenceExpression(node.expression) && generate(node).code.includes("createRoot")) {
        return t.expressionStatement(node.expression.expressions[0]);
      }
      return node;
    });
    program.scope.crawl();
    const exportsNeeded = new Set(["React", "ReactDOM", "BrowserRouter", "languageFromPath", "languageBasename"]);
    const extracted = [];
    for (const child of program.get("body")) {
      if (!child.isFunctionDeclaration() || !extractedNames.has(child.node.id.name)) continue;
      const name = child.node.id.name;
      const destination = name === "HomePage" ? "pages/HomePage.jsx" : `components/${name}.jsx`;
      const dependencies = new Set();
      child.traverse({ ReferencedIdentifier(p) {
        const binding = p.scope.getBinding(p.node.name);
        if ((binding?.scope === program.scope || extractedNames.has(p.node.name)) && p.node.name !== name) dependencies.add(p.node.name);
      } });
      const imports = [];
      const shared = [];
      for (const dependency of dependencies) {
        const binding = program.scope.getBinding(dependency);
        if (binding && (binding.path.isImportSpecifier() || binding.path.isImportDefaultSpecifier() || binding.path.isImportNamespaceSpecifier())) {
          const declaration = binding.path.parentPath.node;
          const importedFile = path.posix.normalize(path.posix.join(path.posix.dirname(target), declaration.source.value));
          imports.push(t.importDeclaration([t.cloneNode(binding.path.node)], t.stringLiteral(relativeImport(destination, importedFile))));
        } else { shared.push(dependency); exportsNeeded.add(dependency); }
      }
      if (shared.length) imports.push(t.importDeclaration(shared.map((dependency) => t.importSpecifier(t.identifier(dependency), t.identifier(dependency))), t.stringLiteral("../site.jsx")));
      const componentAst = t.file(t.program([...imports, t.exportDefaultDeclaration(t.cloneNode(child.node, true))]));
      convertJsx(componentAst);
      await writeSource(destination, componentAst);
      extracted.push(t.importDeclaration([t.importDefaultSpecifier(t.identifier(name))], t.stringLiteral(relativeImport(target, destination))));
      child.remove();
    }
    ast.program.body.unshift(...extracted);
    ast.program.body.push(t.exportNamedDeclaration(null, [...exportsNeeded].map((name) => t.exportSpecifier(t.identifier(name), t.identifier(name)))));
    ast.program.body.push(t.exportDefaultDeclaration(t.identifier("SiteRoutes")));
  }
  convertJsx(ast);
  await writeSource(target, ast);
}
console.log(`Recovered ${files.length} modules and ${extractedNames.size} editable React components.`);
