angular.module('tickets-app')
    .controller('homeController', function($scope, $rootScope, dataService) {

        $scope.getKeyword = function() {
            var keyword = $scope.event
            dataService.getKeywordSearch(keyword)
                .then(function(response) {
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