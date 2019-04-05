import googleUrl from './google.html'

class LoginFormCtrl {
    constructor() {
    }
}

const loginFormComponent = angular
    .module('loginFormComponent', ['ui.router'])
    .config(($stateProvider) => {
        $stateProvider
            .state('login_google', {
                url: '/login/google',
                controller: LoginFormCtrl,
                templateUrl: googleUrl
            });
    })
;
export default loginFormComponent;