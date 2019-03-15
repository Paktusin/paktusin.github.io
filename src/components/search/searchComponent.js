const key = 'AIzaSyAkA0CpBlhGz9wL4c-QXIhv3VDveR519B8';
const cx = '014304609217056868435:jwmw5vnla-y';

const searchComponent = angular.module('searchComponent', [])
    .component('searchComponent', {
        template: `
<div class="position-relative">
<i class="fa fa-search search-logo"></i>
<input id="search" type="text" placeholder="Поиск" ng-model="query" ng-model-options="{debounce:500}" ng-change="search()"/>
<div class="search-results shadow" ng-if="results.length > 0">
    <div class="list-group">
        <a ng-repeat="item in results" href="{{item.link}}" target="_blank" class="py-1 px-2 list-group-item list-group-item-action">
        <div class="media">
        <div class="media-body">
        <span class="text-primary">{{item.title}}</span>
         <br/>
         <small class="text-black-50">{{item.displayLink}}</small>
        </div>
        </div>
        
        </a>
    </div>
</div>
</div>
`,
        controller: ($scope, $http) => {
            document.addEventListener('click', (e) => {
                if ($(e.target).parents('.search-results').length === 0) {
                    $scope.results = [];
                    $scope.$apply();
                }
            });
            $scope.query = '';
            $scope.results = [];
            $scope.search = (e) => {
                $http.get(`https://www.googleapis.com/customsearch/v1?`, {
                    params: {key, cx, q: $scope.query}
                }).then(res => {
                    $scope.results = res.data.items;
                })
            }
        }
    });

export default searchComponent;