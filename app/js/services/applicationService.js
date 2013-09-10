'use strict';

angular.module('pushApp.services').
  factory('applicationService', function(subscriberService) {
        var applications = [
            {name: 'Hulk', code: 'AP123-456', type: 'application', languages: '5', subscribers: subscriberService.getSubscribersByApplication('AP123-456').length},
            {name: 'Casino', code: 'PS361-346', type: 'group', languages: '3', subscribers: subscriberService.getSubscribersByApplication('PS361-346').length}
        ];
        return {
            getRootApplications : function() {
                return applications;
            },
            getApplication : function(codeValue) {
                for(var i = 0; i<applications.length; i++) {
                    if (applications[i].code === codeValue) {
                        return applications[i];
                    }
                }
                return null;
            },
            addApplication : function(application) {
                applications.push(application);
            }
        };
    });
