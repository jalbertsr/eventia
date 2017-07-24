angular.module('tickets-app')
    .factory('dataService', function ($http) {
      var apiKey = 'bYHVec5iZZLcVLX9LTAK3Ipovub0RRvD'
// FALTA REVISAR EL HTML VINCULADO A ESTA LLAMADA
      function getKeywordSearch (keyword) {
        var url = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + keyword + '&apikey=' + apiKey
        return $http.get(url)
      }
// JOAN ALBERT
      function getDaily () {
        var url = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + +'&apikey=' + apiKey
        return $http.get(url)
      }
// HUMBERTO
      function getPopular () {
        var url = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + +'&apikey=' + apiKey
        return $http.get(url)
      }
// CATA
      function getRelevant () {
        var url = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + +'&apikey=' + apiKey
        return $http.get(url)
      }

      return {
        getKeywordSearch: getKeywordSearch,
        getDaily: getDaily,
        getPopular: getPopular,
        getRelevant: getRelevant
      }
    })
