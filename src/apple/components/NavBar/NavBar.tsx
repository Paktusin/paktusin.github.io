import React from 'react';
import classes from './NavBar.module.scss'
import clsx from "clsx";
import {getMenu} from '../../../data';
import {Link} from 'react-router-dom';

export function NavBar() {
    const modules = getMenu();

    return (
        <nav className={classes.NavBar}>
            <div className={clsx('container', classes.container)}>
                {modules.map((module, index) => <Link key={index} to={`/apple/${module.url}`}>{module.name}</Link>)}
                <Link to={'/vk'}>VK theme</Link>
            </div>
        </nav>
    );
};
