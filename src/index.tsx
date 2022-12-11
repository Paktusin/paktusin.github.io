import dayjs from "dayjs";
import LocalizedFormat from "dayjs/esm/plugin/localizedFormat";
import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
dayjs.extend(LocalizedFormat);

const rootEl = document.getElementById("root");
if (rootEl!.hasChildNodes()) {
  hydrateRoot(rootEl!, <App />);
} else {
  createRoot(rootEl!).render(<App />);
}
