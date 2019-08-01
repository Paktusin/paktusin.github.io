import React from 'react';
import AppBar from "./components/AppBar/AppBar";
import {Section} from "./components/Section/Section";
import Hero from "./components/Hero/Hero";
import './css/index.scss'
import {ScrollVisible} from "./components/ScrollVisible/ScrollVisible";
import {NavBar} from "./components/NavBar/NavBar";

function App() {

    return (
        <>
            <ScrollVisible/>
            <NavBar/>
            <AppBar/>
            <main>
                <Section>
                    <Hero>
                        <h1 data-scroll={true}>React Developer</h1>
                        <h2 data-scroll={true} className={'headline'}>
                            More hooks.<br/>
                            More components.<br/>
                            More bugs.
                        </h2>
                        <p data-scroll={true}>Starting at 2014</p>
                    </Hero>
                    <Hero>
                        <h1 data-scroll={true}>React Developer</h1>
                        <h2 data-scroll={true} className={'headline'}>
                            More hooks.<br/>
                            More components.<br/>
                            More bugs.
                        </h2>
                        <p data-scroll={true}>Starting at 2014</p>
                    </Hero>
                    <Hero>
                        <h1 data-scroll={true}>React Developer</h1>
                        <h2 data-scroll={true} className={'headline'}>
                            More hooks.<br/>
                            More components.<br/>
                            More bugs.
                        </h2>
                        <p data-scroll={true}>Starting at 2014</p>
                    </Hero>
                    <Hero>
                        <h1 data-scroll={true}>React Developer</h1>
                        <h2 data-scroll={true} className={'headline'}>
                            More hooks.<br/>
                            More components.<br/>
                            More bugs.
                        </h2>
                        <p data-scroll={true}>Starting at 2014</p>
                    </Hero>
                </Section>
            </main>
        </>
    );
}

export default App;
