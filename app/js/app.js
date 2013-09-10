'use strict';

angular.module('pushApp.filters', []);
angular.module('pushApp.services', []);
angular.module('pushApp.directives', []);
angular.module('pushApp.controllers', []);

angular.module('pushApp', ['ngRoute', 'pushApp.filters', 'pushApp.services', 'pushApp.directives', 'pushApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/applications/:group', {templateUrl: 'js/views/applicationList.html', controller: 'ApplicationListCtrl'});
//    $routeProvider.when('/applications/create-application', {templateUrl: 'js/views/applicationList.html', controller: 'ApplicationListCtrl'});
    $routeProvider.when('/application/:code', {templateUrl: 'js/views/applicationDetails.html', controller: 'ApplicationCtrl'});
    $routeProvider.when('/application/:code/subscribers', {templateUrl: 'js/views/subscriberList.html', controller: 'SubscribersCtrl'});
//    $routeProvider.otherwise({redirectTo: '/applications/root'});
  }]);
