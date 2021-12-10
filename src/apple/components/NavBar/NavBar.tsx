import React from 'react';
import classes from './NavBar.module.scss'
import clsx from "clsx";
import siteData from "../../../siteData.json";
import {SiteData} from '../../../SiteData';
import {Link} from 'react-router-dom';

export function NavBar() {
    const modules = (siteData as SiteData).modules;

    return (
        <nav className={classes.NavBar}>
            <div className={clsx('container', classes.container)}>
                {modules.map((module, index) => <Link key={index} to={`/apple/${module.url}`}>{module.name}</Link>)}
                <Link to={'/vk'}>VK theme</Link>
            </div>
        </nav>
    );
};
