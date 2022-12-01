import angular from 'angular'
import 'angular-ui-router'

import {copyToClipboard, formatDate, ru} from "./common";
import './css/main.scss'
import mainNav from "./components/mainNav/mainNav";
import aboutTemplate from './view/about.html'
import eduTemplate from './view/education.html'
import projectsTemplate from './view/projects.html'
import skillsTemplate from './view/skills.html'
import commentsCmp from "./components/comments";
import appTemplate from './app.html';

localStorage.setItem('path', '/vk');


fetch('/data.json')
    .then(res => res.json())
    .then(initAngular)

function initAngular(data) {
    const skills = data.skills.skills;
    const certs = data.certificates.certs;
    const projects = data.projects.projects;
    const allSkills = Object.values(skills).reduce((res, items) => res.concat(items), []);

    angular
        .module('app', [
            'ui.router',
            mainNav.name,
            commentsCmp.name,
        ])
        .config(($stateProvider, $urlRouterProvider) => {
            $stateProvider
                .state('app', {
                    url: '/',
                    templateUrl: appTemplate,
                })
                .state('app.about', {
                    url: 'about',
                    templateUrl: aboutTemplate,
                    controller: 'aboutCtrl'
                })
                .state('app.education', {
                    url: 'education',
                    templateUrl: eduTemplate,
                    controller: ($scope) => {
                        $scope.certs = certs;
                    }
                })
                .state('app.projects', {
                    url: 'projects',
                    templateUrl: projectsTemplate,
                    controller: ($scope) => {
                        $scope.projects = projects;
                    }
                })
                .state('app.skills', {
                    url: 'skills',
                    templateUrl: skillsTemplate,
                    controller: ($scope) => {
                        $scope.skills = skills;
                        $scope.groups = Object.keys(skills);
                    }
                });
            $urlRouterProvider.otherwise('/about');
        })
        .controller('aboutCtrl', ($interval, $scope) => {
            $scope.years = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];
            $scope.like = localStorage.getItem('like') === 'true';
            $scope.toggleLike = () => {
                $scope.like = !$scope.like;
                localStorage.setItem('like', $scope.like);
            };
            $scope.postTime = formatDate('2015-09-01 15:30');
            $scope.randomGif = `/vk/gifs/${Math.floor(Math.random() * 8) + 1}.gif`;
            $scope.skills = allSkills;
            $scope.comment = () => {
                document.getElementById('comment').focus();
            };
            $scope.copyLink = () => {
                copyToClipboard(location.href);
                alert('url was copied to clipboard')
            };
            const getCountDown = (date_string) => {
                let res = [];
                const now = moment();
                let date = moment(date_string);
                $scope.years.forEach((size, index) => {
                    const count = now.diff(date, size);
                    date.subtract(-count, size);
                    res.push(count + ' ' + $scope.getLabel(count, index));
                });
                return res.join(', ');
            };
            $scope.getLabel = (count, index) => {
                return $scope.years[index];
            };
            $scope.dev_time = 'Calculating...';
            $scope.it_time = 'Calculating...';
            $interval(() => {
                $scope.dev_time = getCountDown('2015-09-01');
                $scope.it_time = getCountDown('2012-01-01');
            }, 1000);
        });

    angular.bootstrap(document, ['app']);
}
