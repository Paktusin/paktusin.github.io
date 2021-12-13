import React from 'react';
import Hero from "../Hero/Hero";
import classes from "./Edu.module.scss"
import sunset from "../../img/sunset.jpg";
import {getData} from '../../../data';

export const Edu = () => {
    const module = getData().education;

    return (
        <Hero id={'education'}>
            <div className={classes.Edu} data-scroll={true}>
                <div className={classes.bg} style={{backgroundImage: `url(${sunset})`}}/>
                <div className={classes.content}>
                    <h3>{module.name}</h3>
                    <h2>{module.title}</h2>
                    <p>{module.department}</p>
                    <a href={module.url} rel="noopener" target="_blank">Learn more</a>
                </div>
            </div>
        </Hero>
    );
};
