angular.module('tickets-app')
.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'js/routes/home/template.html',
		controller : 'searchController', 'dailyController', 'popularController', 'relevantController'
	})
})