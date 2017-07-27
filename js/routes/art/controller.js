/* global angular */

angular.module('tickets-app')
     .controller('artController', function ($scope, $rootScope, dataService) {
       dataService.getArtEvents()
       .then(function (response) {
         $scope.events = response.data._embedded.events
       })
     })
