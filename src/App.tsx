import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeSelect from "./components/ThemeSelect/ThemeSelect";
import "./index.scss";
import { routes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      <ThemeSelect />
    </BrowserRouter>
  );
}
