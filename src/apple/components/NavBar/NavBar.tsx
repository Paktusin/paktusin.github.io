import React, {useContext} from 'react';
import classes from './NavBar.module.scss'
import clsx from "clsx";
import {Link} from '../Link/Link';
import {DataContext} from '../../Apple';

export function NavBar() {
    const data = useContext(DataContext) as any;
    const modules = Object.keys(data).map(key => ({name: data[key].name, url: key}))

    return (
        <nav className={classes.NavBar}>
            <div className={clsx('container', classes.container)}>
                {modules.map((module, index) => <Link key={index} href={`#${module.url}`}>{module.name}</Link>)}
            </div>
        </nav>
    );
};
