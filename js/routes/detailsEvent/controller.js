angular.module('tickets-app')
  .controller('DetailsEventController', function ($scope, $routeParams, dataService) {
    var idEvent = $routeParams.id
    console.log(idEvent)
    dataService.getEvent(idEvent)
        .then(function (response) {
          $scope.event = response.data
          $scope.latitude = response.data._embedded.venues["0"].location.latitude
          $scope.longitude = response.data._embedded.venues["0"].location.longitude
          console.log(response)
        })
  })
