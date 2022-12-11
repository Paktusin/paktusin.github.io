import dayjs from "dayjs";
import LocalizedFormat from "dayjs/esm/plugin/localizedFormat";
import { hydrate, render } from "react-dom";
import { App } from "./App";
dayjs.extend(LocalizedFormat);

const rootElement = document.getElementById("root")!;
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
