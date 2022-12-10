import dayjs, { ManipulateType, QUnitType } from "dayjs";

export function copyToClipboard(str: string) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

const units = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
] as QUnitType[];

export function getCountDown(date_string: string) {
  let res: string[] = [];
  const now = dayjs();
  let date = dayjs(date_string);
  units.forEach((size, index) => {
    const count = now.diff(date, size);
    date = date.subtract(-count, size as ManipulateType);
    res.push(count + " " + units[index]);
  });
  return res.join(", ");
}
