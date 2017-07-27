(function() {

  angular.module('tickets-app')
    .factory('utilsService', function() {

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

      function customizeDataEvent(eventApi) {

        var localDate = eventApi.dates.start.localDate
        var parseMonth = localDate.split('-')[1]
        var month = months[parseMonth]
        var parseday = localDate.split('-')[2]
        var digitOne = parseday.split('')[0]
        var digitTwo = parseday.split('')[1]
        if (digitOne == 0) var day = digitTwo
        else var day = parseday

        if (eventApi._embedded.attractions && eventApi._embedded.attractions[0].externalLinks &&
          eventApi._embedded.attractions[0].externalLinks.facebook && eventApi._embedded.attractions[0].externalLinks.twitter &&
          eventApi._embedded.attractions[0].externalLinks.homepage) {
          var facebookUrl = eventApi._embedded.attractions[0].externalLinks.facebook[0].url
          var twitterUrl = eventApi._embedded.attractions[0].externalLinks.twitter[0].url
          var artistUrl = eventApi._embedded.attractions[0].externalLinks.homepage[0].url
        } else {
          var facebookUrl = ''
          var twitterUrl = ''
          var artistUrl = ''
        }

       return {
           month: month,
           day: day,
           name: eventApi.name,
           country: eventApi._embedded.venues[0].country.name,
           city: eventApi._embedded.venues[0].city.name,
           imageUrl: eventApi.images[0].url,
           id: eventApi.id,
           facebookUrl: facebookUrl,
           twitterUrl: twitterUrl,
           artistUrl: artistUrl
         }

      }

      return {
        customizeDataEvent: customizeDataEvent
      }

  })

})()

