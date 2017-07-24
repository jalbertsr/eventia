angular.module('angularMovies')
    .controller('homeController', function($scope, $rootScope, dataService) {

        $scope.getQuery = function() {
            var query = $scope.film
            console.log(query)
            $rootScope.$broadcast('queryReady', { query: query })
        }

        $scope.$on('queryReady', function(e, data) {
            dataService.getFilms(data.query)
                .then(function(response) {
                    console.log(response)
                    $scope.films = response.data.results
                })
        })
    })