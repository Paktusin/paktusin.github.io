import './main.scss';
import Bg from "./modules/bg";
import {elements} from './base';

const hashChange = () => {
    const hash = location.hash.replace('#', '');
    if (hash.length > 0 && routes[hash] instanceof Function) {
        routes[hash](hash);
    } else {
        location.hash = 'about';
    }
    elements.navLinks.forEach(el => {
        el.classList.remove('active');
        const isActive = el.getAttribute('href').indexOf(hash) !== -1;
        if (isActive) el.classList.add('active');
    })
};

const aboutCtrl = (name) => {
    bg.change(0);
    updateContent(name);
};

const educationCtrl = (name) => {
    bg.change(1);
    updateContent(name);
};

const updateContent = (id) => {
    elements.content.innerHTML = document.querySelector('#' + id).innerHTML;
};


const routes = {
    about: aboutCtrl,
    education: educationCtrl,
    // projects: projectsCtrl,
    // skills: skillsCtrl,
};

['hashchange', 'load'].forEach(el => window.addEventListener(el, hashChange));
const bg = new Bg(document.querySelector('.content .bg'));