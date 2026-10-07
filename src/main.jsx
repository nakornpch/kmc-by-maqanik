import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, languageFromPath, languageBasename } from "./site.jsx";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={languageBasename(languageFromPath(window.location.pathname))}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
