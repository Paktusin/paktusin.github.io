import './css/main.scss'
import mainNav from "./components/mainNav/mainNav";
import aboutTemplate from './view/about.html'
import eduTemplate from './view/education.html'
import projectsTemplate from './view/projects.html'
import skillsTemplate from './view/skills.html'
import moment from 'moment/min/moment.min';
// import './cat';
import img from './img/mike.jpg'

angular.module('app', ['ui.router', mainNav.name])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: aboutTemplate,
                controller: 'aboutCtrl'
            })
            .state('education', {
                url: '/education',
                templateUrl: eduTemplate
            })
            .state('projects', {
                url: '/projects',
                templateUrl: projectsTemplate
            })
            .state('skills', {
                url: '/skills',
                templateUrl: skillsTemplate
            })
        ;
        $urlRouterProvider.otherwise('about');
    })
    .controller('aboutCtrl', ($interval, $scope) => {
        $scope.img = img;

        const getCountDown = (date_string) => {
            let res = [];
            const now = moment();
            let date = moment(date_string);
            ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'].forEach(size => {
                const count = now.diff(date, size);
                date.subtract(-count, size);
                res.push(count + ' ' + size);
            });
            return res.join(', ');
        };
        $scope.dev_time = 'Calculating...';
        $scope.it_time = 'Calculating...';
        $interval(() => {
            $scope.dev_time = getCountDown('2015-09-01');
            $scope.it_time = getCountDown('2012-01-01');
        }, 1000);
    })
;