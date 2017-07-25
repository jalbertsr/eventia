angular.module('tickets-app')
  .config(function($routeProvider) {

    $routeProvider
      .when('/event/:id', {
        templateUrl: 'js/routes/detailsEvent/template.html',
        controller: 'DetailsEventController'
      })
  })