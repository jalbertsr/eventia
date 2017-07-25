angular.module('tickets-app')
  .controller('DetailsEventController', function($scope, $routeParams, dataService ) {

      var idEvent = $routeParams.id
      console.log(idEvent)
      dataService.getEvent(idEvent)
        .then( function( response ) {
          $scope.event = response.data
          console.log(response)

        })

    })