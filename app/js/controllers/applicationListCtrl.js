'use strict';

angular.module('pushApp.controllers').
    controller('ApplicationListCtrl', function($scope, $location, applicationService) {

        $scope.applications = applicationService.getRootApplications();

        $scope.showSubscribers = function(applicationCode) {
            $location.path('/application/' + applicationCode + '/subscribers');
        };

        $scope.addApplication = function(application) {
            applicationService.addApplication(application);
        }
    });