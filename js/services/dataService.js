angular.module('tickets-app')
    .factory('dataService', function ($http) {
      var apiKey = 'bYHVec5iZZLcVLX9LTAK3Ipovub0RRvD'
      function getKeywordSearch (keyword) {
        var url = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + keyword + '&apikey=' + apiKey
        return $http.get(url)
      }

      function getDaily (date) {
        var url = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=' + date + '&apikey=' + apiKey
        return $http.get(url)
      }

      function getPopular () {
        var url = 'https://app.ticketmaster.com/discovery/v2/events?sort_by=popularity&apikey=' + apiKey
        return $http.get(url)
      }

      function getEvent (idEvent) {
        var url = 'https://app.ticketmaster.com/discovery/v2/events/' + idEvent + '.json?apikey=' + apiKey
        return $http.get(url)
      }

      function getLocalEvents () {
        var url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=ES&apikey=' + apiKey
        return $http.get(url)
      }

      return {
        getKeywordSearch: getKeywordSearch,
        getDaily: getDaily,
        getPopular: getPopular,
        getLocalEvents: getLocalEvents,
        getEvent: getEvent
      }
    })
