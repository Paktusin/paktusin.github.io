import React from 'react';
import classes from './Container.module.scss'
import clsx from "clsx";

export function Container({children}) {
    return (
        <div className={clsx('container',classes.Container)}>
            {children}
        </div>
    );
}