import templateUrl from './mainNav.html'
import searchComponent from "../search/searchComponent";

class controller {
    constructor() {
        this.openModal();
    }

    openModal() {
        $('#modal').modal('show');
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