angular.module('tickets-app')
    .controller('searchController', function ($scope, $rootScope, dataService) {
      
      $scope.getKeyword = function () {
        var keyword = $scope.keyword
        dataService.getKeywordSearch(keyword)
          .then(function (response) {
            console.log(response)
          })
      }
    })

    .controller('dailyController', function ($scope, $rootScope, dataService) {

      $scope.getDaily = function () {
        //YYYY-MM-DDTHH:mm:ssZ ---> format date 
        var date = (new Date()).toISOString().split('.')
        date = date.shift() + 'Z'
        dataService.getKeywordSearch(date)
                .then(function (response) {
                  console.log(response)
                  var completeEvents = response.data.events
                  $scope.events = 
                })
      }
    })

    .controller('popularController', function ($scope, $rootScope, dataService) {
      $scope.getPopular = function () {
        var keyword = $scope.event
        dataService.getKeywordSearch(keyword)
                .then(function (response) {
                  console.log(response)
                })
      }
    })

    .controller('relevantController', function ($scope, $rootScope, dataService) {
      $scope.getRelevant = function () {
        var keyword = $scope.event
        dataService.getKeywordSearch(keyword)
                .then(function (response) {
                  console.log(response)
                })
      }
    })
