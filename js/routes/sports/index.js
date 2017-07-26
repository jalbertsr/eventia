angular.module('tickets-app')
  .config(function( $routeProvider ) {

    $routeProvider
      .when('/sports/', {
        templateUrl: 'js/routes/sports/template.html',
        controller: 'sportsController'
      })
  })