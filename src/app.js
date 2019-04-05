import './css/main.scss'
import mainNav from "./components/mainNav/mainNav";
import aboutTemplate from './view/about.html'
import eduTemplate from './view/education.html'
import projectsTemplate from './view/projects.html'
import skillsTemplate from './view/skills.html'
import moment from 'moment';
import './cat';
import skills, {certs} from "./skills";
import commentsCmp from "./components/comments";
import formatDate from "./formatDate";
import loginFormComponent from "./components/loginForm/loginForm";
import appTemplate from './app.html';

moment.locale('ru');

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};


angular.module('app', ['ui.router', mainNav.name, commentsCmp.name, loginFormComponent.name])
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
                templateUrl: projectsTemplate
            })
            .state('app.skills', {
                url: 'skills',
                templateUrl: skillsTemplate,
                controller: ($scope) => {
                    $scope.skills = skills;
                }
            });
        $urlRouterProvider.otherwise('/about');
    })
    .controller('aboutCtrl', ($interval, $scope) => {
        $scope.like = localStorage.getItem('like') === 'true';
        $scope.toggleLike = () => {
            $scope.like = !$scope.like;
            localStorage.setItem('like', $scope.like);
        };
        $scope.postTime = formatDate('2015-09-01 15:30');
        $scope.randomGif = `gifs/${Math.floor(Math.random() * 8) + 1}.gif`;
        $scope.skills = skills.all();
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