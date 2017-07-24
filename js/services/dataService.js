angular.module('tickets-app')
    .factory('dataService', function ($http) {  	
        var apiKey = 'xxxxxxxxxxxxxx'

        function getNowPlaying () {
          var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey
          return $http.get(url)
        }

        return {
          getNowPlaying: getNowPlaying,
        }
    })