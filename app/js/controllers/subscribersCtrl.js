'use strict';

angular.module('pushApp.controllers').
    controller('SubscribersCtrl', function($scope, $routeParams, subscriberService, applicationService) {
        $scope.subscribers = subscriberService.getSubscribersByApplication($routeParams.code);
        $scope.application = applicationService.getApplication($routeParams.code);
    });