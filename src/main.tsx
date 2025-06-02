import dayjs from "dayjs";
import LocalizedFormat from "dayjs/esm/plugin/localizedFormat";
import { App } from "./App";
import { createRoot } from "react-dom/client";

dayjs.extend(LocalizedFormat);

const root = createRoot(document.getElementById("root")!);

root.render(<App />);
