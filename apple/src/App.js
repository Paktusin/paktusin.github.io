import React from 'react';
import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import './css/index.scss'
import {ScrollVisible} from "./components/ScrollVisible/ScrollVisible";
import {NavBar} from "./components/NavBar/NavBar";
import {Me} from "./components/Hero/Me/Me";
import {Footer} from "./components/Footer/Footer";

function App() {

    return (
        <>
            <span id={'me'}/>
            <ScrollVisible/>
            <NavBar/>
            <AppBar/>
            <main>
                <Me/>
                <Hero id={'skills'}>
                    There will be skill
                </Hero>
                <Hero id={'certs'}>
                    There will be certs
                </Hero>
                <Hero id={'edu'}>
                    There will be edu
                </Hero>
                <Hero id={'proj'}>
                    There will be projects
                </Hero>
            </main>
            <Footer/>
        </>
    );
}

export default App;
