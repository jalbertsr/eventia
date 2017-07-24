angular.module('tickets-app')
    .controller('homeController', function($scope, $rootScope, dataService) {

        $scope.getKeyword = function() {
            var keyword = $scope.event
            console.log(keyword)
            $rootScope.$broadcast('keywordReady', { keyword: keyword })
        }

        $scope.$on('keywordReady', function(e, data) {
            dataService.getKeywordSearch(data.keyword)
                .then(function(response) {
                    console.log(response)
                    $scope.films = response.data
                })
        })
    })