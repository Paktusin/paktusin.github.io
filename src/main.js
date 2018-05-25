import './main.scss';
import {elements} from "./base";

const hashChange = () => {
    const hash = location.hash.replace('#', '');
    if (hash.length > 0 && routes[hash] instanceof Function) {
        routes[hash]();
    } else {
        location.hash = 'about';
    }
};

const aboutCtrl = () => {
    console.log('about ctrl');
    elements.contentBg.style.backgroundImage = elements.bg.style.backgroundImage = 'url(https://imgur.com/GBjDN9H.jpg)';
};

const routes = {
    about: aboutCtrl,
    // education: educationCtrl,
    // projects: projectsCtrl,
    // skills: skillsCtrl,
};

['hashchange', 'load'].forEach(el => window.addEventListener(el, hashChange));
