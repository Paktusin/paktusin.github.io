import template from './mainNav.html'

class controller {
    constructor() {

    }

    $onInit() {
        console.log('mainNav init')
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