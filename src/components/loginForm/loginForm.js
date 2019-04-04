import templateUrl from './loginForm.html'

class LoginFormCtrl {
    constructor() {

    }
}

const loginFormComponent = angular
    .module('loginFormComponent', ['ui.router'])
    .component('loginFormComponent', {
        templateUrl,
        controller: LoginFormCtrl
    })
    .config(($stateProvider) => {
        $stateProvider.state('loginForm', {
            url: '/login_form',
            component: 'loginFormComponent'
        })
    })
;
export default loginFormComponent;