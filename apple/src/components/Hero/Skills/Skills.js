import React from 'react';
import Hero from "../Hero";
import {Tabs} from "../../Tabs/Tabs";
import {Tab} from "../../Tabs/Tab";
import skills from "../../../common/skills";
import {Container} from "../../Container/Container";

export const Skills = () => {
    return (
        <Hero id={'skills'}>
            <Container>
                <Tabs>
                    {skills.frontend.map(skill => (
                        <Tab title={skill.name} img={skill.logo}/>
                    ))}
                </Tabs>
            </Container>
        </Hero>
    );
};