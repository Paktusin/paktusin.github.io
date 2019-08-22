import React from 'react';
import Hero from "../Hero";
import skills from "../../../common/skills";
import {Container} from "../../Container/Container";
import classes from "./Skills.module.scss"
import clsx from "clsx";

export const Skills = () => {
    return (
        <Hero id={'skills'}>
            <Container>
                <div className={"row"}>
                    {skills.frontend.map(skill => (
                        <div className={clsx("col-12 col-md-6 p-2", classes.SkillContainer)}>
                            <div className={classes.Skill} style={{backgroundColor: skill.color, backgroundImage: `url(${skill.logo})`}}>

                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Hero>
    );
};