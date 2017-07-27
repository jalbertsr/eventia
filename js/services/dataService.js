/* global angular */

(function () {
  var apiKey = 'bYHVec5iZZLcVLX9LTAK3Ipovub0RRvD'

  var urlSearch = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=<%KEYWORD%>&apikey=' + apiKey

  var urlDailyEvents = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=<%DATE%>&apikey=' + apiKey

  var urlLocalEvents = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=<%COUNTRY%>&apikey=' + apiKey

  var urlEvents = 'https://app.ticketmaster.com/discovery/v2/events/<%IDEVENT%>.json?apikey=' + apiKey

  angular.module('tickets-app')
      .factory('dataService', function ($http) {
        function getKeywordSearch (keyword) {
          var url = urlSearch.replace('<%KEYWORD%>', keyword)
          return $http.get(url)
        }

        function getDaily (date) {
          var url = urlDailyEvents.replace('<%DATE%>', date)
          return $http.get(url)
        }

        function getPopular () {
          var url = 'https://app.ticketmaster.com/discovery/v2/events?sort_by=popularity&apikey=' + apiKey
          return $http.get(url)
        }

        function getEvent (idEvent) {
          var url = urlEvents.replace('<%IDEVENT%>', idEvent)
          return $http.get(url)
        }

        function getGeolocation () {
          var url = 'https://freegeoip.net/json/' // http://ip-api.com/json --> option2
          return $http.get(url)
        }

        function getLocalEvents (countryCode) {
          var url = urlLocalEvents.replace('<%COUNTRY%>', countryCode)
          return $http.get(url)
        }

        function getMusicEvents () {
          var url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=' + apiKey
          return $http.get(url)
        }

        function getSportsEvents () {
          var url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=sports&apikey=' + apiKey
          return $http.get(url)
        }

        function getArtEvents () {
          var url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=theatre&&apikey=' + apiKey
          return $http.get(url)
        }

        return {
          getKeywordSearch: getKeywordSearch,
          getDaily: getDaily,
          getPopular: getPopular,
          getGeolocation: getGeolocation,
          getLocalEvents: getLocalEvents,
          getEvent: getEvent,
          getArtEvents: getArtEvents,
          getMusicEvents: getMusicEvents,
          getSportsEvents: getSportsEvents
        }
      })
})()
