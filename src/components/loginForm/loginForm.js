import googleUrl from './google.html'
import './google.scss'


class LoginFormCtrl {
    constructor($scope, authService) {
        this.authService = authService;
        this.$scope = $scope;
        this.$scope.step = 0;
        this.$scope.username = '';
        this.$scope.password = '';
        this.$scope.busy = false;
        this.$scope.openModal = this.openModal.bind(this);
        this.$scope.submit = this.submit.bind(this);
        this.$scope.next = this.next.bind(this);
        this.$scope.pClick = this.pClick.bind(this);
    }

    $onInit() {
        $('input').on('focus', (el) => {
            $(el.target).parents('.form-group').addClass('focus');
        });
        $('input').on('blur', (el) => {
            if ($(el.target).val().trim().length === 0) {
                $(el.target).parents('.form-group').removeClass('focus');
            }
        });
        setTimeout(() => {
            $('#username').focus();
        }, 1000);
    }

    pClick($event) {
        $($event.target).parents('.form-group').addClass('focus');
    }

    submit(e) {
        e.preventDefault();
        this.$scope.busy = true;
        this.authService.logIn(this.$scope.username, this.$scope.password).then(_ => {
            if (parent) {
                parent.location.href = '/';
            }
            location.href = '/';
        });
    }

    next() {
        this.$scope.busy = true;
        setTimeout(() => {
            this.$scope.busy = false;
            this.$scope.step++;
            this.$scope.$apply();
            $('#username').focus();
        }, 1000);
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