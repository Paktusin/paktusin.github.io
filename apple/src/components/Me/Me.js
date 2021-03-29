import React from 'react';
import Hero from "../Hero/Hero";
import classes from './Me.module.scss'

export function Me() {
    return (
        <Hero className={classes.Me}>
            <h1 data-scroll={true}>Frontend Developer</h1>
            <h2 data-scroll={true} className={'headline'}>
                Stylize page<br/>
                Bring HTML to life<br/>
            </h2>
            <h1 data-scroll={true}>enjoy web surfing.</h1>
            <p data-scroll={true}>Since 2012 <a href={'#disclaimer'}>*</a></p>
        </Hero>
    );
}
