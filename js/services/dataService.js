(function() {

  var apiKey = 'bYHVec5iZZLcVLX9LTAK3Ipovub0RRvD'

  var urlSearch = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=<%KEYWORD%>&apikey=' + apiKey

  var urlEvents = 'https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=<%DATE%>&apikey=' + apiKey


  angular.module('tickets-app')
      .factory('dataService', function ($http) {

        var months = {
          '01': 'JAN',
          '02': 'FEB',
          '03': 'MAR',
          '04': 'APR',
          '05': 'MAY',
          '06': 'JUN',
          '07': 'JUL',
          '08': 'AUG',
          '09': 'SEPT',
          '10': 'OCT',
          '11': 'NOV',
          '12': 'DEC'
        }

        function getKeywordSearch (keyword) {
          var url = urlSearch.replace('<%KEYWORD%>', keyword)
          return $http.get(url)
        }

        function getDaily (date) {
          var url = urlEvents.replace('<%DATE%>', date)
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

        function getGeolocation () {
          var url = 'https://freegeoip.net/json/' // http://ip-api.com/json --> option2
          return $http.get(url)
        }

        function getLocalEvents (countryCode) {
          var url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=' + countryCode + '&apikey=' + apiKey
          console.log(countryCode)
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
          months: months,
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

//

