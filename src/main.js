import './main.scss';
import Bg from "./modules/bg";
import {elements} from './base';

const hashChange = () => {
    const hash = location.hash.replace('#', '');
    if (hash.length > 0 && routes[hash] instanceof Function) {
        routes[hash]();
    } else {
        location.hash = 'about';
    }
};

const aboutCtrl = () => {
    bg.change(0);
    updateContent('about');
};

const educationCtrl = () => {
    bg.change(1);
    updateContent('education');
};

const updateContent = (id) => {
    elements.content.innerHTML = document.querySelector('#'+id).innerHTML;
};


const routes = {
    about: aboutCtrl,
    education: educationCtrl,
    // projects: projectsCtrl,
    // skills: skillsCtrl,
};

['hashchange', 'load'].forEach(el => window.addEventListener(el, hashChange));
const bg = new Bg(document.querySelector('.content .bg'));