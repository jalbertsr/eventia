/* global angular */

angular.module('tickets-app')
    .controller('searchController', function ($scope, $location) {
      $scope.getKeyword = function () {
        var keyword = $scope.keyword
        $location.path('/search/' + keyword)
      }
    })

    .controller('dailyController', function ($scope, $rootScope, dataService) {
        // YYYY-MM-DDTHH:mm:ssZ ---> format date
      var date = (new Date()).toISOString().split('.')
      date = date.shift() + 'Z'
      dataService.getDaily(date)
                .then(function (response) {
                  var completeEvents = response.data._embedded.events
                  $scope.events = completeEvents.slice(0, 4)
                })
    })

    .controller('popularController', function ($scope, $rootScope, dataService) {
      dataService.getPopular()
                .then(function (response) {
                  var completeEvents = response.data._embedded.events
                  $scope.events = completeEvents.slice(12, 16)
                })
    })
