import React, { useContext } from "react";
import Hero from "../Hero/Hero";
import { Container } from "../Container/Container";
import styles from "./Skills.module.scss";
import clsx from "clsx";
import { DataContext } from "../../Apple";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";

export const Skills = () => {
  const frontend = useContext(DataContext).skills.skills.frontend;
  return (
    <Hero id={"skills"} className={styles.Skills}>
      <h2 className={"headline"}>Skills</h2>
      <Container>
        <div className={"row"}>
          {frontend.map((skill, index) => (
            <div
              key={index}
              data-scroll={true}
              className={clsx("col-12 col-md-6 p-3", styles.SkillContainer)}
            >
              <Card className={styles.Skill}>
                <div>
                  <h2>{skill.name}</h2>
                  <p>{skill.text}</p>
                  {skill.more && (
                    <Button className="mt-3" target="_blank" href={skill.more}>
                      Learn more
                    </Button>
                  )}
                </div>
                <div className={styles.image}>
                  <div style={{ backgroundImage: `url(${skill.logo})` }} />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Hero>
  );
};
