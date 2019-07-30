import React from 'react';
import {AppBar} from "./components/AppBar";
import {Section} from "./components/Section";

function App() {
    return (
        <>
            <AppBar/>
            <main>
                <Section>
                    <h1>SOME DEVELOPER</h1>
                </Section>
            </main>
        </>
    );
}

export default App;
