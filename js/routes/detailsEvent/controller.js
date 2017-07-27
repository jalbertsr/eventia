/* global angular */

(function () {
  'use strict'

  var app = angular.module('tickets-app')
  app.controller('DetailsEventController', DetailsEventController)

  function DetailsEventController ($routeParams, $rootScope, dataService, eventCardService) {
    var idEvent = $routeParams.id
    var self = this
    self.eventInformation = []
    dataService.getEvent(idEvent)
      .then(function (response) {
        self.event = response.data
        self.eventInformation.push(eventCardService.customDataCard(response))
        console.log(self.eventInformation)
      })
  }
})()
