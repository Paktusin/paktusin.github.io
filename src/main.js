import 'jquery';
import 'popper.js';
import 'bootstrap';
import './main.scss';

const hashChange = () => {
    console.log(location.hash)
};

['hashchange', 'load'].forEach(el => window.addEventListener(el, hashChange))