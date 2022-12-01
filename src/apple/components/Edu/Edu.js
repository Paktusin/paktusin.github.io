import React, { useContext } from "react";
import classes from "./Edu.module.scss";
import sunset from "../../../common/birobidjan.jpg";
import { DataContext } from "../../Apple";
import { Card } from "../Card/Card";
import Hero from "../Hero/Hero";
import { Container } from "../Container/Container";

export const Edu = () => {
  const module = useContext(DataContext).education;

  return (
    <Hero id={"education"}>
      <Container>
        <Card className={classes.Edu} data-scroll={true}>
          <div
            className={classes.bg}
            style={{ backgroundImage: `url(${sunset})` }}
          />
          <div className={classes.content}>
            <h3>{module.name}</h3>
            <h2>{module.title}</h2>
            <p>{module.department}</p>
            <a href={module.url} target="_blank" rel="noreferrer">
              Learn more
            </a>
          </div>
        </Card>
      </Container>
    </Hero>
  );
};
