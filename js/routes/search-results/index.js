 angular.module('tickets-app')
   .config(function($routeProvider) {
     $routeProvider
       .when('/search/:keyword', {
       templateUrl: '/js/routes/search-results/template.html',
       controller: 'SearchController'
     })
   })