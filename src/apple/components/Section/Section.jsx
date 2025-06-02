import React from 'react';
import classes from './Section.module.scss'
import clsx from "clsx";

export function Section({children, className, ...props}) {
    return (
        <section className={clsx(classes.section, className)} {...props}>
            {children}
        </section>
    );
}