import './main.scss';
import Bg from "./modules/bg";
import {elements} from './base';
import $ from 'jquery';
import moment from 'moment';
import countdown from 'countdown';

window.$ = global.$ = $;

let expTimer;

const hashChange = () => {
    clearInterval(expTimer);
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
    changeContent(name, require('./views/about.html'));
    expTimer = setInterval(updateExpTime, 1000);
};

const updateExpTime = () => {
    $('#devExp').html(getExpString(moment('2015-09-01')));
    $('#allExp').html(getExpString(moment('2012-01-01')));
};

const getExpString = (from) => {
    return countdown(from.toDate()).toString();
};

const educationCtrl = (name) => {
    bg.change(1);
    changeContent(name, require('./views/education.html'));
};

const skillsCtrl = (name) => {
    bg.change(3);
    changeContent(name, require('./views/skills.html'));
};

const projectsCtrl = (name) => {
    bg.change(2);
    changeContent(name, require('./views/projects.html'));
};

const changeContent = (name, content) => {
    let contentEl = $('.content');
    contentEl.animate({opacity: 0}, 100, () => {
        contentEl.css({height: 'auto', width: '100%'});
        let oldContent = contentEl.find('.body');
        let newContent = oldContent.clone();
        newContent.html(content);
        newContent.insertBefore(oldContent);
        oldContent.remove();
        const size = {height: contentEl.height(), width: contentEl.width()};
        const pos = contentEl.offset();
        newContent.fadeOut(0);
        contentEl.css({
            height: 0,
            width: 0,
            opacity: 1,
            position: 'absolute',
            left: $(window).width() / 2,
            top: $(window).height() / 2
        });
        contentEl.animate({height: size.height, width: size.width, left: pos.left, top: pos.top}, 200, () => {
            newContent.fadeIn(200);
            contentEl.css({height: 'auto', width: '100%', top: 0, left: 0, position: 'relative'});
        })
    });
};

const routes = {
    about: aboutCtrl,
    education: educationCtrl,
    projects: projectsCtrl,
    skills: skillsCtrl,
};

['hashchange', 'load'].forEach(el => window.addEventListener(el, hashChange));
const bg = new Bg(document.querySelector('.content .bg'));