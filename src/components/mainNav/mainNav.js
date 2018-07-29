import templateUrl from './mainNav.html'

class controller {
    constructor() {

    }
}

const mainNav = angular
    .module('mainNav', [])
    .component('mainNav', {
        controller,
        templateUrl
    })
;

export default mainNav;