import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";

const rootEl = document.getElementById("root");
if (rootEl!.hasChildNodes()) {
  hydrateRoot(rootEl!, <App />);
} else {
  createRoot(rootEl!).render(<App />);
}
