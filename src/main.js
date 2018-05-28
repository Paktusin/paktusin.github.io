import './main.scss';
import Bg from "./modules/bg";

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
};

const educationCtrl = () => {
    bg.change(1);
};


const routes = {
    about: aboutCtrl,
    education: educationCtrl,
    // projects: projectsCtrl,
    // skills: skillsCtrl,
};

['hashchange', 'load'].forEach(el => window.addEventListener(el, hashChange));
const bg = new Bg(document.querySelector('#content .bg'));