angular.module('tickets-app')
     .controller('sportsController', function($scope, $rootScope, dataService) {

     	dataService.getSportsEvents()
     	  .then(function(response) {
     	       console.log(response)
     	       $scope.events = response.data._embedded.events
     	  })
     })