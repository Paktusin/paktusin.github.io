import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./css/Apple.scss";
import clsx from "clsx";

import AppBar from "./components/AppBar/AppBar";
import { ScrollVisible } from "./components/ScrollVisible/ScrollVisible";
import { NavBar } from "./components/NavBar/NavBar";
import { Me } from "./components/Me/Me";
import { Footer } from "./components/Footer/Footer";
import { Skills } from "./components/Skills/Skills";
import { Edu } from "./components/Edu/Edu";
import { Projects } from "./components/Projects/Projects";
import { Certs } from "./components/Certs/Certs";
import { Data } from "../common/data";
import data from "../common/data.json";

const THEME_KEY = "apple_theme";

export const ThemeContext = createContext<{
  theme: string;
  changeTheme: (theme: string) => void;
}>({} as any);
export const DataContext = createContext<Data>({} as Data);

export function Apple() {
  const ref = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState(localStorage.getItem(THEME_KEY) || "dark");
  const changeTheme = useCallback((theme: string) => {
    localStorage.setItem(THEME_KEY, theme);
    setTheme(theme);
    if (ref.current?.classList.contains("dark") && theme === "light") {
      ref.current?.classList.remove("dark");
    } else {
      ref.current?.classList.add("dark");
    }
  }, []);
  useEffect(() => changeTheme(theme), []);
  return (
    <DataContext.Provider value={data as Data}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div ref={ref} className={clsx("Apple")}>
          <span id={"info"} />
          <ScrollVisible />
          <NavBar />
          <AppBar />
          <main>
            <Me />
            <Skills />
            <Certs />
            <Edu />
            <Projects />
          </main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </DataContext.Provider>
  );
}
