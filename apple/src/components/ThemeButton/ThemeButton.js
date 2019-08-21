import React from 'react';
import {getTheme, setTheme} from "../../common/Theme";
import classes from './ThemeButton.module.scss'

export function ThemeButton() {

    const [selTheme, setSelTheme] = React.useState(getTheme());

    function clickHandler() {
        const nextTheme = selTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        setSelTheme(nextTheme);
    }

    return (
        <button title={'Switch theme'} onClick={clickHandler} className={classes.ThemeButton}>{selTheme}</button>
    );
}