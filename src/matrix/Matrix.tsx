import clsx from "clsx";
import * as React from "react";
import styles from "./Matrix.module.scss";
import data from "../data.json";
import { AllHTMLAttributes } from "react";

interface ElementProps {
  tag: string;
  props: AllHTMLAttributes<any> & { textContent: string };
}

type DataRow = string | ElementProps;

async function typeRow(str: DataRow, element: HTMLElement) {
  if (typeof str === "string") {
    for (let i = 0; i < str.length; i++) {
      element.innerHTML += await new Promise<string>((resolve) =>
        setTimeout(() => resolve(str[i]), 40)
      );
    }
  } else {
    const newEl = document.createElement(str.tag);
    const { textContent, ...props } = str.props;
    Object.keys(props).forEach((prop) => {
      newEl.setAttribute(prop, (props as any)[prop]);
    });
    element.appendChild(newEl);
    await typeRow(textContent, newEl);
  }
}

async function typeData(data: DataRow[], element: HTMLElement) {
  for (let row of data) {
    await typeRow(row, element);
    if (typeof row === "string" && row[row.length - 1] === "\n") {
      await new Promise((r) => setTimeout(() => r(true), 700));
    }
  }
}

const greeting: DataRow[] = [
  "Wake up human...\n",
  "My name is Mikhail Davlichin\n",
  `I am a ${data.info.role}\n`,
  `Here is my `,
  {
    tag: "a",
    props: {
      target: "_blank",
      href: data.info.linkedin,
      textContent: "Linkedin profile",
    },
  },
  `\n`,
  `\nThis theme is under construction, more content will be soon...`,
];

export function Matrix() {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (ref.current) {
      typeData(greeting, ref.current);
    }
  }, []);
  return (
    <div className={clsx(styles.matrix, styles.crt)}>
      <span className={styles.text}>
        <span ref={ref}></span>▮
      </span>
    </div>
  );
}
