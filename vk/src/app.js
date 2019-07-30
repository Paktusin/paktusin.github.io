import {copyToClipboard, formatDate, ru} from "./common";
import './css/main.scss'
import mainNav from "./components/mainNav/mainNav";
import aboutTemplate from './view/about.html'
import eduTemplate from './view/education.html'
import projectsTemplate from './view/projects.html'
import skillsTemplate from './view/skills.html'
import skills, {certs} from "./skills";
import commentsCmp from "./components/comments";
import loginFormComponent from "./components/loginForm/loginForm";
import appTemplate from './app.html';
import en from "./trans/en";
import ruRU from "./trans/ruRu";
import authService from "./authService";

localStorage.setItem('path', '/vk');

angular.module('app', [
    'ui.router',
    mainNav.name,
    commentsCmp.name,
    loginFormComponent.name,
    authService.name,
    'pascalprecht.translate'
])
    .config(($stateProvider, $urlRouterProvider, $translateProvider) => {
        $translateProvider
            .translations('en', en)
            .translations('ru', ruRU)
            .preferredLanguage((ru() ? 'ru' : 'en'))
            .useSanitizeValueStrategy(null)
        ;
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
                    $scope.ru = ru;
                }
            })
            .state('app.projects', {
                url: 'projects',
                templateUrl: projectsTemplate,
                controller: ($scope) => {
                    $scope.ru = ru;
                }
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
        $scope.years = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];
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
            alert(ru() ? 'ссылка скопирована в буфер обмена' : 'url was copied to clipboard')
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
            if (!ru()) return $scope.years[index];
            switch (index) {
                case 0:
                    return (count === 1) ? 'год' : (0 < count && count < 5) ? 'года' : 'лет';
                case 1:
                    return (count === 1) ? 'месяц' : (0 < count && count < 5) ? 'месяца' : 'месяцев';
                case 2:
                    return (count === 1) ? 'неделя' : (0 < count && count < 5) ? 'недели' : 'недель';
                case 3:
                    return (count === 1) ? 'день' : (0 < count && count < 5) ? 'деня' : 'дней';
                case 4:
                    return (count === 1) ? 'час' : (0 < count && count < 5) ? 'часа' : 'часов';
                case 5:
                    return (count === 1) ? 'минута' : (0 < count && count < 5) ? 'минуты' : 'минут';
                case 6:
                    return (count === 1) ? 'секунда' : (0 < count && count < 5) ? 'секунды' : 'секунд';
            }
        };
        $scope.dev_time = 'Calculating...';
        $scope.it_time = 'Calculating...';
        $interval(() => {
            $scope.dev_time = getCountDown('2015-09-01');
            $scope.it_time = getCountDown('2012-01-01');
        }, 1000);
    });

angular.bootstrap(document, ['app']);