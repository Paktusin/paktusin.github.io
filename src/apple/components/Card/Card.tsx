import classes from "./Card.module.scss";
import React, { PropsWithChildren, useMemo } from "react";
import clsx from "clsx";

const backgrounds = [
  "linear-gradient(30deg, rgba(33,19,113,1) 0%, rgba(33,19,113,1) 30%, rgba(43,20,141,1) 30%, rgba(43,20,141,1) 60%, rgba(68,12,188,1) 60%, rgba(71,11,193,1) 83%, rgba(159,16,220,1) 100%)",
  "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
  "linear-gradient(rgb(76, 16, 42) 0%, rgb(21, 21, 22) 100%)",
  "linear-gradient(to right bottom, #1f224b 0%, #2d5d85 100%)",
  "linear-gradient(-217deg, #621e8f 16%, #762ca6 56%, #cf6e88 99%)",
  "linear-gradient(to right top, #194189 0%, #3B4980 25%, #8738A7 100%)",
  "linear-gradient(to right top, #604C7C 0%, #257983 50%, #20825A 100%)",
  "linear-gradient(229deg, #517281 0%, #3b5d70 27%, #4d5c82 72%, #5d647f 100%)",
  "linear-gradient(215deg, #c52d47 0%, #a5325c 30%, #8b366d 100%)",
  "linear-gradient(30deg, #214079 1%, #663A7E 55%, #A82B7D 100%)",
  "linear-gradient(201deg, #EF278E 0%, #81347F 47%, #43407A 100%)",
];

export interface CardProps extends PropsWithChildren {
  className?: string;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  gradient = true,
  ...props
}) => {
  const style = useMemo(() => {
    const style: React.CSSProperties = {};
    if (gradient) {
      style.background =
        backgrounds[Math.floor(Math.random() * backgrounds.length)];
    }
    return style;
  }, [gradient]);
  return (
    <div
      {...props}
      className={clsx(className, classes.Card, {
        [classes.gradient]: gradient,
      })}
      style={style}
    >
      {children}
    </div>
  );
};
