import {formatDate} from "../formatDate";

const commentsCmp = angular.module('commentsCmp', [])
    .component('commentsCmp', {
        template: `<div class="comments pr-4" ng-if="comments.length >0" ng-class="coef>0 || comments.length==1?'mb-3':''">
    <div class="media" ng-repeat="comment in getComments()" >
    <img src="https://vk.com/images/deactivated_100.png?ava=1"
class="img-fluid rounded-circle mr-3" width="34" height="34"/>
    <div class="media-body">
    <div class="font-weight-bold text-primary">{{'You'|translate}}</div>
<div>{{comment.text}}</div>
<span class="text-black-50">{{date(comment)}}</span>
<hr ng-if="coef > 0" />
</div>
</div>
</div>
<button ng-click="more()" ng-if="getComments().length < comments.length" class="btn btn-link font-weight-bold">{{'Show more comments'|translate}}</button>
<div class="form-inline">
    <div class="form-group flex-grow-1 m-0">
    <input id="comment" ng-keypress="keyPress($event)" class="form-control w-100" placeholder="{{'Write comment'|translate}}..." ng-model="comment"/>
    </div>
    <button class="btn btn-link send-btn" ng-disabled="comment.length==0" ng-click="sendComment()">
    <i class="fa fa-lg fa-paper-plane"></i>
</button>
    </div>`,
        controller: ($scope) => {
            $scope.coef = 0;
            $scope.date = (comment) => formatDate(comment.date);
            $scope.keyPress = (event) => {
                if (event.keyCode === 13) $scope.sendComment();
            };
            $scope.comment = '';
            $scope.comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
            $scope.more = () => {
                $scope.coef++;
            };
            $scope.getComments = () => {
                return $scope.comments.slice(0, $scope.coef * 10 + 1);
            };
            $scope.sendComment = () => {
                if ($scope.comment.length > 0) {
                    $scope.comments = [...$scope.comments.map(c => {
                        delete c['$$hashKey'];
                        return c;
                    }).sort((a, b) => {
                        if (moment(a.date) === moment(b.date)) return 0;
                        return (moment(a.date) > moment(b.date)) ? -1 : 1;
                    }), {text: $scope.comment, date: moment().toDate()}];
                    localStorage.setItem('comments', JSON.stringify($scope.comments));
                }
                $scope.comment = '';
            };
        }
    })
;

export default commentsCmp;