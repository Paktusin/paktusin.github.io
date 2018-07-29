import templateUrl from './bG.html'
import bgs from "../../bgs";

class controller {
    'ngInject';

    constructor($transitions) {
        $transitions.onEnter('', this.bgChange.bind(this));
        this.style = {};
    }

    bgChange(tran, state) {
        this.style = {...this.style, backgroundImage: `url(${bgs[state.name]})`};
    }
}

const bG = angular.module('bG', [])
    .component('bG', {
        controller,
        templateUrl
    });


export default bG;