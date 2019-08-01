import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import {setTheme} from "./components/common/Theme";

setTheme();
ReactDOM.render(<App/>, document.getElementById('root'));

