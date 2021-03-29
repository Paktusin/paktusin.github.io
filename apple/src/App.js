import React from 'react';
import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import './css/index.scss'
import {ScrollVisible} from "./components/ScrollVisible/ScrollVisible";
import {NavBar} from "./components/NavBar/NavBar";
import {Me} from "./components/Me/Me";
import {Footer} from "./components/Footer/Footer";
import {Skills} from "./components/Skills/Skills";
import {Edu} from "./components/Edu/Edu";
import {Projects} from './components/Projects/Projects';

function App() {

    return (
        <>
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
        </>
    );
}

export default App;
