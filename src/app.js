import './css/main.scss'
import 'angular';
import uiRouter from 'angular-ui-router';
import mainNav from "./components/mainNav/mainNav";
import aboutTemplate from './view/about.html'
import eduTemplate from './view/education.html'
import projectsTemplate from './view/projects.html'
import skillsTemplate from './view/skills.html'

const app = angular.module('app', [uiRouter, mainNav.name])
    .config(($stateProvider, $urlRouterProvider,$transitions) => {
        console.log($transitions)
        $stateProvider
            .state('about', {
                url: '/about',
                template: aboutTemplate
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
    .controller('mainCtrl', ['$rootScope', ($rootScope) => {
        $rootScope.$on('$stateChangeSuccess', (...props) => {
            console.log('some')
        });
    }])
;