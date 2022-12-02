import React, { useCallback, useEffect, useRef } from "react";
import Hero from "../Hero/Hero";
import classes from "./Me.module.scss";
import clsx from "clsx";

export function Me() {
  const meRef = useRef();
  const mouseMove = useCallback((event) => {
    if (meRef.current) {
      const { clientX, clientY } = event;
      const { left, width, top, right, height, bottom } =
        meRef.current.getBoundingClientRect();
      const yPos =
        clientY > bottom
          ? 0
          : clientY < top
          ? 100
          : ((bottom - clientY) / height) * 100;
      const xPos =
        clientX < left
          ? 100
          : clientX > right
          ? 0
          : ((right - clientX) / width) * 100;
      meRef.current.style.backgroundPosition = `${xPos}% ${yPos}%`;
    }
  }, []);
  useEffect(() => {
    document.body.addEventListener("mousemove", mouseMove);

    return () => {
      document.body.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseMove]);

  return (
    <Hero className={classes.Me} data-scroll={true}>
      <h1 data-scroll={true}>Frontend Developer</h1>
      <h2 ref={meRef} className={clsx(classes.Name, "my-3 mx-4")}>
        Mikhail Davlichin.
      </h2>
      <h3 data-scroll={true} className={"headline mb-2"}>
        Stylize page
        <br />
        Bring HTML to life
        <br />
        enjoy web surfing.
      </h3>
      <span className={classes.disclaimer} data-scroll={true}>
        Since 2012 <a href={"#disclaimer"}>*</a>
      </span>
    </Hero>
  );
}
