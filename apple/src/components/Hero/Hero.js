import React from 'react';
import classes from './Hero.module.scss';
import {ScrollVisible} from "../ScrollVisible/ScrollVisible";

export function Hero({children}) {
    return (
        <ScrollVisible>
            <div className={classes.Hero}>
                {children}
            </div>
        </ScrollVisible>
    );
}