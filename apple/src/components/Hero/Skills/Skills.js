import React from 'react';
import Hero from "../Hero";
import skills from "../../../common/skills";
import {Container} from "../../Container/Container";
import classes from "./Skills.module.scss"
import clsx from "clsx";

export const Skills = () => {
    return (
        <Hero id={'skills'} className={classes.Skills}>
            <Container>
                <div className={"row"}>
                    {skills.frontend.map((skill,index) => (
                        <div key={index} data-scroll={true} className={clsx("col-12 col-md-6 p-2", classes.SkillContainer)}>
                            <div className={classes.Skill} style={{
                                backgroundColor: skill.color,
                                backgroundImage: `url(${skill.logo})`,
                                color: (skill.textColor || 'white')
                            }}>
                                <div style={{maxWidth: 300}}>
                                    <p>{skill.text}</p>
                                    {skill.more && <a target="_blank" href={skill.more}>Learn more</a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Hero>
    );
};