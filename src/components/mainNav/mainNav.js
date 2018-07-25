import template from './mainNav.html'

class controller {
    constructor() {

    }
}

const mainNav = angular
    .module('mainNav', [])
    .component('mainNav', {
        controller,
        template
    })
;

export default mainNav;