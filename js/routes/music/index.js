angular.module('tickets-app')
  .config(function( $routeProvider ) {

    $routeProvider
      .when('/music', {
        templateUrl: 'js/routes/music/template.html',
        controller: 'musicController'
      })
  })