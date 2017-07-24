angular.module('angularMovies')
.config(function($routeProvider){
	$routeProvider
	.when('/nowPlaying',{
		templateUrl : 'js/routes/nowPlaying/template.html',
		controller : 'nowPlayingController'
	})
})