angular.module('tickets-app')
    .controller('searchController', function ($scope, $rootScope, dataService) {
      $scope.getKeyword = function () {
        var keyword = $scope.event
        dataService.getKeywordSearch(keyword)
                .then(function (response) {
                  console.log(response)
                })
            // $rootScope.$broadcast('keywordReady', { keyword: keyword })
      }

        // $scope.$on('keywordReady', function(e, data) {
        //     dataService.getKeywordSearch(data.keyword)
        //         .then(function(response) {
        //             console.log("SDA")
        //         })
        // })
    })
    .controller('dailyController', function ($scope, $rootScope, dataService) {
      $scope.getDaily = function () {
        var keyword = $scope.event
        dataService.getKeywordSearch(keyword)
                .then(function (response) {
                  console.log(response)
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
