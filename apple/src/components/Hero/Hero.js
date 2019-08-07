import React from 'react';
import classes from './Hero.module.scss'
import {Section} from "../Section/Section";
import clsx from "clsx";

export default function Hero({children, className, ...props}) {
    return (
        <Section className={clsx(classes.Hero,className)} {...props}>
            {children}
        </Section>
    );
}