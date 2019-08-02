import React from 'react';
import classes from './Hero.module.scss'

export default function Hero({children, ...props}) {
    return (
        <div className={classes.Hero} {...props}>
            {children}
        </div>
    );
}