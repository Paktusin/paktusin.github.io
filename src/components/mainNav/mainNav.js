import templateUrl from './mainNav.html'

const mainNav = angular
    .module('mainNav', [])
    .component('mainNav', {
        templateUrl
    })
;

export default mainNav;