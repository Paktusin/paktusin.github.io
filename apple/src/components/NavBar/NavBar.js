import React from 'react';
import classes from './NavBar.module.scss'
import {Link} from "../Link/Link";

export function NavBar() {
    return (
        <nav className={classes.NavBar}>
            <div className={classes.container}>
                <Link href={'/'}>Logo</Link>
                <Link href={'#me'}>About Me</Link>
                <Link href={'#skills'}>Skills</Link>
                <Link href={'#certs'}>Certificates</Link>
                <Link href={'#edu'}>Education</Link>
                <Link href={'#proj'}>Projects</Link>
                <Link href={'/vk'}>VK style</Link>
            </div>
        </nav>
    );
};