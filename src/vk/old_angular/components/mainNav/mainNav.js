import templateUrl from './mainNav.html'

/* @ngInject */
class controller {
    constructor() {
    }
}

const mainNav = angular
    .module('mainNav', [])
    .component('mainNav', {
        controller,
        templateUrl,
        bindings: {
            side: '<'
        }
    })
;

export default mainNav;
