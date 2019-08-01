import React from 'react';
import classes from './Hero.module.scss'

export default function Hero({children, alt}) {
    return (
        <div className={classes.Hero}>
            {children}
        </div>
    );
}