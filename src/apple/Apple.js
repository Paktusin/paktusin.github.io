import React, {createContext, useContext, useEffect, useState} from 'react';

import './css/Apple.scss'
import clsx from 'clsx';

import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import {ScrollVisible} from "./components/ScrollVisible/ScrollVisible";
import {NavBar} from "./components/NavBar/NavBar";
import {Me} from "./components/Me/Me";
import {Footer} from "./components/Footer/Footer";
import {Skills} from "./components/Skills/Skills";
import {Edu} from "./components/Edu/Edu";
import {Projects} from './components/Projects/Projects';
import {useParams} from 'react-router-dom';

const THEME = 'apple_theme';

export const ThemeContext = createContext(null);

function Apple() {
    const {module} = useParams();
    const [theme, setTheme] = useState(localStorage.getItem(THEME) || 'light');
    useEffect(() => localStorage.setItem(THEME, theme), [theme]);
    useEffect(() => {
        document.querySelector(`#${module || 'me'}`)?.scrollIntoView();
    }, [module])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={clsx('Apple', theme)}>
                <span id={'me'}/>
                <ScrollVisible/>
                <NavBar/>
                <AppBar/>
                <main>
                    <Me/>
                    <Skills/>
                    <Hero id={'certs'}>There will be certs</Hero>
                    <Edu/>
                    <Projects/>
                </main>
                <Footer/>
            </div>
        </ThemeContext.Provider>
    );
}

export default Apple;
