angular.module('tickets-app')
  .config(function( $routeProvider ) {

    $routeProvider
      .when('/art', {
        templateUrl: 'js/routes/art/template.html',
        controller: 'artController'
      })
  })