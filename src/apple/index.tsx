import React from "react";
import { hydrate, render } from "react-dom";
import { Apple } from "./Apple";

const rootElement = document.getElementById("root");
if (rootElement!.hasChildNodes()) {
  hydrate(<Apple />, rootElement);
} else {
  render(<Apple />, rootElement);
}
