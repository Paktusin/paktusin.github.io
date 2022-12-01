import React, {useCallback, useContext} from 'react';
import classes from './ThemeButton.module.scss'
import clsx from 'clsx';
import {ThemeContext} from '../../Apple';

export function ThemeButton() {
    const {theme, setTheme} = useContext(ThemeContext);

    const clickHandler = useCallback(() => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
    }, [setTheme, theme])

    return (
        <button title={'Switch theme'} onClick={clickHandler} className={clsx(classes.ThemeButton, 'd-none d-md-flex')}>{theme}</button>
    );
}
