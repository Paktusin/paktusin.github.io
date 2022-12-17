import clsx from "clsx";
import * as React from "react";
import styles from "./Matrix.module.scss";
import data from "../data.json";
import { AllHTMLAttributes } from "react";

interface ElementProps {
  tag: string;
  props: AllHTMLAttributes<any> & { text: string };
}

type DataRow = string | ElementProps;

async function typeRow(text: string, element: HTMLElement) {
  for (let i = 0; i < text.length; i++) {
    element.innerText += await new Promise<string>((resolve) =>
      setTimeout(() => resolve(text[i]), 40)
    );
  }
}

async function typeEl(dataRow: DataRow, parent: HTMLElement) {
  let newEl: HTMLElement;
  let text = "";
  if (typeof dataRow === "string") {
    newEl = document.createElement("span");
    text = dataRow;
  } else {
    newEl = document.createElement(dataRow.tag);
    const { text: dataText, ...props } = dataRow.props;
    text = dataText;
    Object.keys(props).forEach((prop) => {
      newEl.setAttribute(prop, (props as any)[prop]);
    });
  }
  parent.appendChild(newEl!);
  await typeRow(text, newEl!);
}

async function typeData(data: DataRow[], element: HTMLElement) {
  for (let row of data) {
    await typeEl(row, element);
    if (typeof row === "string" && row[row.length - 1] === "\n") {
      await new Promise((r) => setTimeout(() => r(true), 700));
    }
  }
}

const greeting: DataRow[] = [
  "Wake up human...\n",
  "My name is Mikhail Davlichin\n",
  `I am a ${data.info.role}\n`,
  `More info in my `,
  {
    tag: "a",
    props: {
      target: "_blank",
      href: data.info.linkedin,
      text: "Linkedin profile",
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
