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

const aboutCtrl = () => {
    bg.change(0);
    elements.content.innerHTML = require('./views/about.html');
};

const educationCtrl = () => {
    bg.change(1);
    elements.content.innerHTML = require('./views/education.html');
};

const skillsCtrl = () => {
    bg.change(3);
    elements.content.innerHTML = require('./views/skills.html');
};

const projectsCtrl = () => {
    bg.change(2);
    elements.content.innerHTML = require('./views/projects.html');
};

const routes = {
    about: aboutCtrl,
    education: educationCtrl,
    projects: projectsCtrl,
    skills: skillsCtrl,
};

['hashchange', 'load'].forEach(el => window.addEventListener(el, hashChange));
const bg = new Bg(document.querySelector('.content .bg'));