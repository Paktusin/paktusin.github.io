import React from 'react';
import Hero from "../Hero/Hero";
import classes from "./Edu.module.scss"
import sunset from "../../img/sunset.jpg";

export const Edu = () => {
    return (
        <Hero id={'edu'}>
            <div className={classes.Edu} data-scroll={true}>
                <div className={classes.bg} style={{backgroundImage: `url(${sunset})`}}/>
                <div className={classes.content}>
                    <h3><b>Edu</b>cation</h3>
                    <h2>Birobidjan State Pedagogical Institute</h2>
                    <p>Faculty of Mathematics and Informatics, specialty Information Systems and Technologies ,
                        engineer's degree</p>
                    <a href="https://goo.gl/maps/5kQcUt6qFL82" rel="noopener" target="_blank">Learn more</a>
                </div>
            </div>
        </Hero>
    );
};
