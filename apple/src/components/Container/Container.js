import React from 'react';
import classes from './Container.module.scss'

export function Container({children}) {
    return (
        <div className={classes.Container}>
            {children}
        </div>
    );
}