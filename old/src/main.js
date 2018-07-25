import '../../src/css/main.scss';
import Bg from "./modules/bg";
import {elements} from './base';
import $ from 'jquery';
import moment from 'moment';
import countdown from 'countdown';

window.$ = global.$ = $;

let expTimer;
const state = {
    pageLoading: false
};

const hashChange = () => {
    if (!state.pageLoading) {
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
    }
};

const aboutCtrl = (name) => {
    changeContent(name, require('./views/about.html'),0);
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
    changeContent(name, require('./views/education.html'),1);
};

const skillsCtrl = (name) => {
    changeContent(name, require('./views/skills.html'),3);
};

const projectsCtrl = (name) => {
    changeContent(name, require('./views/projects.html'),2);
};

const changeContent = (name, content, bgkey) => {
    state.pageLoading = true;
    const contentEl = elements.contentBox;
    contentEl.css({opacity:0});
    const contentBody = contentEl.find('.body');
    const contentBg = contentEl.find('.bg');
    contentBody.html(content);
    const size = {height: contentEl.height(), width: contentEl.width()};
    const pos = contentEl.offset();
    contentBody.hide();
    contentBg.hide();
    contentEl.css({
        height: 0,
        width: 0,
        opacity: 1,
        position: 'absolute',
        left: $(window).width() / 2,
        top: $(window).height() / 2
    });
    contentEl.animate({height: size.height, width: size.width, left: pos.left, top: pos.top}, 200, () => {
        contentEl.css({height: 'auto', width: '100%', top: 0, left: 0, position: 'relative'});
        contentBody.show();
        contentBg.show();
        resizeGlass();
        bg.change(bgkey);
        state.pageLoading = false;
    });
};

const resizeGlass = () => {
    elements.contentBox.find('.bg').css({width: elements.contentBox.width(), height: elements.contentBox.height()})
};

const routes = {
    about: aboutCtrl,
    education: educationCtrl,
    projects: projectsCtrl,
    skills: skillsCtrl,
};

['hashchange', 'load'].forEach(el => window.addEventListener(el, hashChange));
window.addEventListener('resize', resizeGlass);
const bg = new Bg();

window.fadeIn = (e) => {
    console.log(e);
    $(e.target).fadeIn(200);
};