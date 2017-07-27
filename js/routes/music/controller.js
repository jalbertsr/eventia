/* global angular */

angular.module('tickets-app')
     .controller('musicController', function ($scope, $rootScope, dataService) {
       dataService.getMusicEvents()
       .then(function (response) {
         $scope.events = response.data._embedded.events
       })
     })
