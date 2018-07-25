import template from './bG.html'
import bgs from "../../bgs";

class controller {
    'ngInject';

    constructor($transitions, $element) {
        $transitions.onEnter('', this.bgChange.bind(this));
        this.style = null;
        this.el = $element;
        window.addEventListener('resize', this.resizeBg.bind(this))
    }

    bgChange(tran, state) {
        this.style = {backgroundImage: `url(${bgs[state.name]})`};
    }

    resizeBg(e) {
        const content = document.getElementById('content');
        console.log(content.clientWidth,content.clientHeight, content.offsetLeft, content.offsetTop);
        const bg = this.el.children();
        bg.clientWidth = content.clientWidth;
        bg.clientHeight = content.clientHeight;
        bg.offsetLeft = content.offsetLeft;
        bg.offsetTop = content.offsetTop;
    }
}

const bG = angular.module('bG', [])
    .component('bG', {
        controller,
        template
    });


export default bG;