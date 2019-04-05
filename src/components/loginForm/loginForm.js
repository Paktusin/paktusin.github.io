import googleUrl from './google.html'
import './google.scss'

class LoginFormCtrl {
    constructor($scope) {
        this.$scope = $scope;
    }

    ru(){
        return navigator.language === 'ru-RU';
    }

    $onInit() {
        $('.placeholder').click((e) => {
            console.log(e);
            $(e.target).parent().find('input').focus();
        });

        setTimeout(() => {
            document.getElementById('username').focus()
        }, 1000);

        this.$scope.openModal = this.openModal;
        this.$scope.ru = this.ru;
    }

    openModal() {
        $('#modal').modal('show');
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