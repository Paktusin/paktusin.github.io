import React, { useContext } from "react";
import Hero from "../Hero/Hero";
import clsx from "clsx";
import { Container } from "../Container/Container";
import classes from "./Projects.module.scss";
import { DataContext } from "../../Apple";
import { Card } from "../Card/Card";

export const Projects = () => {
  const projects = useContext(DataContext).projects.projects;
  return (
    <Hero id={"projects"}>
      <h2 className={"headline"}>Projects</h2>
      <Container>
        {projects.map((project, index) => (
          <div className={"row"} key={index}>
            <div data-scroll={true} className={clsx("col-12 col-12 p-3")}>
              <Card
                gradient={false}
                className={clsx(classes.project, "row", {
                  "row-reverse": index % 2,
                })}
              >
                <>
                  {project.logo && (
                    <div
                      className={
                        "col-md-6 col-12 d-none d-md-flex position-relative"
                      }
                      style={{ minHeight: "100%" }}
                    >
                      <div
                        className={classes.image}
                        style={{ backgroundImage: `url(${project.logo})` }}
                      />
                    </div>
                  )}
                  <div
                    className={clsx(
                      { "col-md-6": project.logo },
                      "col-12",
                      classes.text
                    )}
                  >
                    <h3>{project.title}</h3>
                    <p>{project.descr}</p>
                    {project.url && (
                      <a target={"_blank"} href={project.url} rel="noreferrer">
                        Learn more
                      </a>
                    )}
                  </div>
                </>
              </Card>
            </div>
          </div>
        ))}
      </Container>
    </Hero>
  );
};
