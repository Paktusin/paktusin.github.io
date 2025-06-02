import clsx from "clsx";
import * as React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ThemeSelect.module.scss";
import { routes } from "../../routes";

const ThemeSelect: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const close = (event: MouseEvent) => {
    if (
      event.target &&
      (event.target as HTMLElement).closest(`.${styles.title}`) !== ref.current
    ) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", close);
    return () => {
      document.removeEventListener("click", close);
    };
  }, []);
  return (
    <div className={clsx(styles.themeSelect, { [styles.open]: open })}>
      <ul className={clsx(styles.links, "dropdown-menu")}>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              className={"dropdown-item"}
              to={route.link || route.path}
              onClick={() => setOpen(false)}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
        <div ref={ref} className={styles.title} onClick={() => setOpen(!open)}>
          theme select
        </div>
      </ul>
    </div>
  );
};

export default ThemeSelect;
