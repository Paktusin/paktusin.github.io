import React from 'react';
import AppBar from "./components/AppBar";
import {Section} from "./components/Section/Section";
import Hero from "./components/Hero";
import './css/index.scss'
import {ScrollVisible} from "./components/ScrollVisible/ScrollVisible";
import {ThemeProvider} from "react-jss";

export const lightTheme = {
    textColor: '#000',
    bgColor: 'rgb(250, 250, 250)',
    altBgColor: 'rgb(255, 255, 255)',
};
export const darkTheme = {
    textColor: 'rgb(255, 255, 255)',
    bgColor: 'rgb(0, 0, 0)',
    altBgColor: 'rgb(18, 18, 23)',
};

function App() {

    function getTheme() {
        return window.location.hash === '#dark' ? darkTheme : lightTheme;
    }

    function changeLocation() {
        setTheme(getTheme())
    }

    const [theme, setTheme] = React.useState(getTheme());
    const appStyle = {backgroundColor: theme.bgColor, color: theme.altBgColor};

    React.useEffect(() => {
        window.addEventListener('popstate', changeLocation);
        return () => {
            window.removeEventListener('popstate', changeLocation);
        };
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <div style={appStyle}>
                <ScrollVisible/>
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
            </div>
        </ThemeProvider>
    );
}

export default App;
