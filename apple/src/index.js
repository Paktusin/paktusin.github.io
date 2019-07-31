import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';

export const lightTheme = {
    '--text-color': '#000',
    '--bg-color': 'rgb(250, 250, 250)',
    '--alt-bg-color': 'rgb(255, 255, 255)',
};
export const darkTheme = {
    '--text-color': 'rgb(255, 255, 255)',
    '--bg-color': 'rgb(0, 0, 0)',
    '--alt-bg-color': 'rgb(18, 18, 23)',
};

function getTheme() {
    return window.location.hash === '#dark' ? darkTheme : lightTheme;
}

function changeLocation() {
    const theme = getTheme();
    Object.keys(theme).forEach(key => {
        document.body.style.setProperty(key, theme[key]);
    })
}

changeLocation();
window.addEventListener('popstate', changeLocation);

ReactDOM.render(<App/>, document.getElementById('root'));

