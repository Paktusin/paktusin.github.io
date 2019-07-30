import React from 'react';
import {AppBar} from "./components/AppBar/AppBar";
import {Section} from "./components/Section/Section";
import {Hero} from "./components/Hero/Hero";
import './css/index.scss'

function App() {
    return (
        <>
            <AppBar/>
            <main>
                {Array(20).fill(null).map((_, key) =>
                    <Section key={key}>
                        <Hero>
                            <h1 data-scroll={true}>React Developer</h1>
                            <h2 data-scroll={true} className={'headline'}>
                                More hooks.<br/>
                                More components.<br/>
                                More bugs.
                            </h2>
                            <p data-scroll={true}>Since 2014</p>
                        </Hero>
                    </Section>
                )}
            </main>
        </>
    );
}

export default App;
