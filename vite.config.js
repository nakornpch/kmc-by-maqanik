import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  optimizeDeps: {
    exclude: ["react", "react/jsx-runtime", "react-dom/client"],
  },
  resolve: {
    alias: [
      { find: /^react$/, replacement: fileURLToPath(new URL("./src/vendor/react.js", import.meta.url)) },
      { find: "react/jsx-runtime", replacement: fileURLToPath(new URL("./src/vendor/jsx-runtime.js", import.meta.url)) },
      { find: "react-dom/client", replacement: fileURLToPath(new URL("./src/vendor/react-dom-client.js", import.meta.url)) },
    ],
  },
  oxc: { jsx: { runtime: "automatic", development: false } },
});
