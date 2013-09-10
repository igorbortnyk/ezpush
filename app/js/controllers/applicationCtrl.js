'use strict';

angular.module('pushApp.controllers').
    controller('ApplicationCtrl', function($scope, $routeParams, applicationService) {
        $scope.application = applicationService.getApplication($routeParams.code);
    });