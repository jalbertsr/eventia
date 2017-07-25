 angular.module('tickets-app')
  .controller('SearchController', function ($scope, $routeParams, dataService) {
    var keyword = $routeParams.keyword
    console.log(keyword)

    dataService.getKeywordSearch(keyword)
     .then(function (response) {
       console.log(response)
       $scope.events = response.data._embedded.events
     })
  })
