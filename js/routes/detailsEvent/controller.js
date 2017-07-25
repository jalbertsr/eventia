angular.module('tickets-app')
  .controller('DetailsEventController', function($scope, $routeParams, DataService ) {

      var idEvent = $routeParams.id
      console.log(idEvent)
      DataService.getEvent(idEvent)
        .then( function( response ) {
          $scope.event = response.data
          console.log(response)

        })

    })