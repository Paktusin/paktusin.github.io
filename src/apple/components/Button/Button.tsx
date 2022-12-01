import React from 'react';
import classes from './Button.module.scss';
import clsx from 'clsx';

export const Button: React.FunctionComponent<{ className?: string, href: string } & any> =
    ({children, className, ...props}) => {
        return (<a className={clsx(className, classes.Button)} {...props}>{children}</a>)
    }
