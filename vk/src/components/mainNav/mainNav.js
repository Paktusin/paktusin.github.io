import templateUrl from './mainNav.html'
import searchComponent from "../search/searchComponent";

/* @ngInject */
class controller {
    constructor(authService) {
        this.authService = authService;
    }
}

const mainNav = angular
    .module('mainNav', [searchComponent.name])
    .component('mainNav', {
        controller,
        templateUrl,
        bindings: {
            side: '<'
        }
    })
;

export default mainNav;