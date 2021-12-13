import React from 'react';
import Hero from "../Hero/Hero";
import {Container} from "../Container/Container";
import classes, {image} from "./Skills.module.scss"
import clsx from "clsx";
import {getData} from '../../../data';

export const Skills = () => {
    const frontend = getData().skills.frontend;
    return (
        <Hero id={'skills'} className={classes.Skills}>
            <h2 className={'headline'}>Skills</h2>
            <Container>
                <div className={"row"}>
                    {frontend.map((skill, index) => (
                        <div key={index} data-scroll={true}
                             className={clsx("col-12 col-md-6 p-3", classes.SkillContainer)}>
                            <div className={classes.Skill}>
                                <div>
                                    <h2>{skill.name}</h2>
                                    <p>{skill.text}</p>
                                    {skill.more && <a target="_blank" href={skill.more}>Learn more</a>}
                                </div>
                                <div className={image}>
                                    <div style={{backgroundImage: `url(${skill.logo})`}}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Hero>
    );
};
