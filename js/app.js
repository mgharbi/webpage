var mgharbi_app = angular.module('mgharbi', [
    'ngRoute',
    'mgharbi.controllers'
]);

mgharbi_app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('', {
                templateUrl: 'partials/home.html',
                controller: 'MainController'
            }).
            when('/projects', {
                templateUrl: 'partials/home.html',
                controller: 'MainController'
            }).
            when('/bio', {
                templateUrl: 'partials/bio.html',
                controller: 'MainController'
            }).
            otherwise({
                redirectTo: ''
            });
}]);
