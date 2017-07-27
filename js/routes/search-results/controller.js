/* global angular */

(function () {
  'use strict'

  var app = angular.module('tickets-app')
  app.controller('SearchController', SearchController)

  function SearchController ($routeParams, $rootScope, dataService, utilsService) {
    var keyword = $routeParams.keyword
    var countryCode = ''

    var self = this

    self.show = false

    dataService.getKeywordSearch(keyword)
      .then(function (response) {
        self.events = []
        if (!response.data._embedded) {
          self.show = true
        } else {
          var eventsResponse = response.data._embedded.events
          self.events = eventsResponse.map(utilsService.customizeDataEvent)
        }
      })

    dataService.getGeolocation()
      .then(function (response) {
        countryCode = response.data.country_code
        $rootScope.$broadcast('countryCodeReady', {
          countryCode: countryCode
        })
      })

    $rootScope.$on('countryCodeReady', function (e, data) {
      dataService.getLocalEvents(data.countryCode)
        .then(function (response) {
          self.asides = response.data._embedded.events
        })
    })
  }
})()
