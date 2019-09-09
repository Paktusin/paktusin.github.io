import React from 'react';
import classes from './NavBar.module.scss'
import {Link} from "../Link/Link";
import clsx from "clsx";

export function NavBar() {
    return (
        <nav className={classes.NavBar}>
            <div className={clsx('container', classes.container)}>
                <Link href={'#me'}>About Me</Link>
                <Link href={'#skills'}>Skills</Link>
                <Link href={'#certs'}>Certificates</Link>
                <Link href={'#edu'}>Education</Link>
                <Link href={'#proj'}>Projects</Link>
                <Link href={'/vk'}>VK theme</Link>
            </div>
        </nav>
    );
};