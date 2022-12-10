import React from "react";
import { hydrate, render } from "react-dom";
import { Vk } from "./Vk";

const rootElement = document.getElementById("root");
if (rootElement!.hasChildNodes()) {
  hydrate(<Vk />, rootElement);
} else {
  render(<Vk />, rootElement);
}
