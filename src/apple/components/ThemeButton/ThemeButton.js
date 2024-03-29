import React, {useCallback, useContext} from 'react';
import classes from './ThemeButton.module.scss'
import clsx from 'clsx';
import {ThemeContext} from '../../Apple';

export function ThemeButton() {
    const {theme, changeTheme} = useContext(ThemeContext);

    const clickHandler = useCallback(() => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        changeTheme(nextTheme);
    }, [changeTheme, theme])

    return (
        <button title={'Switch theme'} onClick={clickHandler} className={clsx(classes.ThemeButton)}>{theme}</button>
    );
}
