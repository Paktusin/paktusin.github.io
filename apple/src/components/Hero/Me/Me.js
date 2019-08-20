import React from 'react';
import Hero from "../Hero";
import classes from './Me.module.scss'

export function Me() {
    return (
        <Hero id={'me'} className={classes.Me}>
            <h1 data-scroll={true}>React Developer</h1>
            <h2 data-scroll={true} className={'headline'}>
                More hooks.<br/>
                More components.<br/>
                More bugs.
            </h2>
            <p data-scroll={true}>Since 2012</p>
        </Hero>
    );
}