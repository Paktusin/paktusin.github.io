import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import {setTheme} from "./common/Theme";

localStorage.setItem('path', '/apple/build');
setTheme();
ReactDOM.render(<App/>, document.getElementById('root'));

