import React from 'react';
import classes from './Section.module.scss'

export function Section({children, ...props}) {
    return (
        <section className={classes.section} {...props}>
            {children}
        </section>
    );
}