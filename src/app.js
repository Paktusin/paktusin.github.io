import './css/main.scss'
import 'angular';
import uiRouter from 'angular-ui-router';
import mainNav from "./components/mainNav/mainNav";
import aboutTemplate from './view/about.html'
import eduTemplate from './view/education.html'
import projectsTemplate from './view/projects.html'
import skillsTemplate from './view/skills.html'
import bgs from "./bgs";
import bG from "./components/bG/bG";


const app = angular.module('app', [uiRouter, mainNav.name, bG.name])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('about', {
                url: '/about',
                template: aboutTemplate,
            })
            .state('education', {
                url: '/education',
                template: eduTemplate
            })
            .state('projects', {
                url: '/projects',
                template: projectsTemplate
            })
            .state('skills', {
                url: '/skills',
                template: skillsTemplate
            });
        $urlRouterProvider.otherwise('about');
    })
    .controller('mainCtrl', ($rootScope, $scope) => {
        $scope.getBgs = () => Object.keys(bgs).map(key => bgs[key]);
    })
;