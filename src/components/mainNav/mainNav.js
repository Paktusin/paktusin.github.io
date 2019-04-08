import templateUrl from './mainNav.html'
import searchComponent from "../search/searchComponent";

class controller {
    constructor(authService) {
        this.authService = authService;
    }

    openModal() {
        this.authService.showDialog(`<iframe style="height: 640px; width: 100%; border:0;" src="/#!/login/google"></iframe>`)
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