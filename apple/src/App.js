import React from 'react';
import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import './css/index.scss'
import {ScrollVisible} from "./components/ScrollVisible/ScrollVisible";
import {NavBar} from "./components/NavBar/NavBar";
import {Me} from "./components/Hero/Me/Me";

function App() {

    return (
        <>
            <ScrollVisible/>
            <NavBar/>
            <AppBar/>
            <main>
                <Me/>
                <Hero id={'skills'}>
                </Hero>
                <Hero id={'certs'}>
                </Hero>
                <Hero id={'edu'}>
                </Hero>
                <Hero id={'proj'}>
                </Hero>
            </main>
        </>
    );
}

export default App;
