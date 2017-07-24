angular.module('tickets-app')
    .factory('dataService', function ($http) {
      var apiKey = 'bYHVec5iZZLcVLX9LTAK3Ipovub0RRvD'

      function getKeywordSearchPlaying (keyword) {
        var url = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + keyword + '&apikey=' + apiKey
        return $http.get(url)
      }

      return {
        getKeywordSearchPlaying: getKeywordSearchPlaying
      }
    })
