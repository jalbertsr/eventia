angular.module('angularMovies')
    .controller('nowPlayingController', function($scope, dataService) {
    	
        dataService.getNowPlaying()
            .then( function (response) {
                console.log(response)
                $scope.films = response.data.results
            })
    })