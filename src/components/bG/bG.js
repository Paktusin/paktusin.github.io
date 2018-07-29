import templateUrl from './bG.html'
import bgs from "../../bgs";

class controller {
    'ngInject';

    constructor($transitions,$location) {
        $transitions.onEnter({}, this.bgChange.bind(this));
        this.style = {backgroundImage: `url(${bgs[$location.path().replace('/','')]})`};
    }

    bgChange(tran, state) {
        if (state && state.name) {
            this.style = {backgroundImage: `url(${bgs[state.name]})`};
        }
    }
}

const bG = angular.module('bG', [])
    .component('bG', {
        controller,
        templateUrl
    });


export default bG;