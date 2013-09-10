'use strict';

angular.module('pushApp.services').
  factory('subscriberService', function() {
        var subscribers = [
            {id:'X23-4FC-345-SDS', applicationCode: 'AP123-456', userName: 'Ronen', osVersion: 'BlackBerry', lang: 'EN'},
            {id:'A23-4FC-754-DSF', applicationCode: 'PS361-346', userName: 'Ami', osVersion: 'IOS-5', lang: 'EN'},
            {id:'1KO-Р78-148-CVD', applicationCode: 'PS361-346', userName: 'Igor', osVersion: 'MacOS', lang: 'RU'},
            {id:'KL2-О90-234-SDS', applicationCode: 'AP123-456', userName: 'Ivan', osVersion: 'IOS-5', lang: 'SP'},
            {id:'JJ3-В90-765-EEF', applicationCode: 'PS361-346', userName: 'Anton', osVersion: 'Android', lang: 'UA'},
            {id:'C663-4FC-236-SDS', applicationCode: 'PS361-346', userName: 'Myroslav', osVersion: 'Windows 7', lang: 'FR'},
            {id:'C663-4FC-236-SDS', applicationCode: 'PS361-346', userName: 'Myroslav', osVersion: 'Windows 7', lang: 'FR'},
            {id:'C663-4FC-236-SDS', applicationCode: 'PS361-346', userName: 'Myroslav', osVersion: 'Windows 7', lang: 'FR'},
            {id:'C663-4FC-236-SDS', applicationCode: 'PS361-346', userName: 'Myroslav', osVersion: 'Windows 7', lang: 'FR'},
            {id:'C663-4FC-236-SDS', applicationCode: 'PS361-346', userName: 'Myroslav', osVersion: 'Windows 7', lang: 'FR'},
            {id:'C663-4FC-236-SDS', applicationCode: 'PS361-346', userName: 'Myroslav', osVersion: 'Windows 7', lang: 'FR'},
            {id:'C663-4FC-236-SDS', applicationCode: 'PS361-346', userName: 'Myroslav', osVersion: 'Windows 7', lang: 'FR'},
            {id:'C663-4FC-236-SDS', applicationCode: 'PS361-346', userName: 'Myroslav', osVersion: 'Windows 7', lang: 'FR'}
        ];
        return {
            getSubscribersByApplication : function(code) {
                var resultSubscribers = [];
                for(var i = 0; i<subscribers.length; i++) {
                    if(subscribers[i].applicationCode === code) {
                        resultSubscribers.push(subscribers[i]);
                    }
                }
                return resultSubscribers;
            }
        };
    });
