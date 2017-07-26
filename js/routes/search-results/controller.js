 angular.module('tickets-app')
     .controller('SearchController', function ($scope, $routeParams, $rootScope, dataService) {
       var keyword = $routeParams.keyword
       var countryCode = ''
       $scope.show = false
         // var lengthEvents
       console.log(keyword)

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

       dataService.getKeywordSearch(keyword)
             .then(function (response) {
               console.log(response)
               $scope.events = []
               if (!response.data._embedded) {
                 console.log('event not available')
                 $scope.show = true
               } else {
                 var eventsResponse = response.data._embedded.events
                 eventsResponse.forEach(function (obj) {
                   var localDate = obj.dates.start.localDate
                   var parseMonth = localDate.split('-')[1]
                   var month = months[parseMonth]
                   var parseday = localDate.split('-')[2]
                   var digitOne = parseday.split('')[0]
                   var digitTwo = parseday.split('')[1]
                   if (digitOne == 0) var day = digitTwo
                   else var day = parseday

                   if (obj._embedded.attractions && obj._embedded.attractions[0].externalLinks && obj._embedded.attractions[0].externalLinks.facebook) {
                     var facebookUrl = obj._embedded.attractions[0].externalLinks.facebook[0].url
                     var twitterUrl = obj._embedded.attractions[0].externalLinks.twitter[0].url
                     var artistUrl = obj._embedded.attractions[0].externalLinks.homepage[0].url
                   } else {
                     var facebookUrl = ''
                     var twitterUrl = ''
                     var artistUrl = ''
                   }

                   $scope.events.push({
                     month: month,
                     day: day,
                     name: obj.name,
                     country: obj._embedded.venues[0].country.name,
                     city: obj._embedded.venues[0].city.name,
                     imageUrl: obj.images[0].url,
                     id: obj.id,
                     facebookUrl: facebookUrl,
                     twitterUrl: twitterUrl,
                     artistUrl: artistUrl
                   })
                 })
               }
               console.log($scope.events)
               var lengthEvents = $scope.events.length
               console.log(lengthEvents + ' event found')
             })

       dataService.getGeolocation()
             .then(function (response) {
               console.log(response)
               countryCode = response.data.country_code
               $rootScope.$broadcast('countryCodeReady', { countryCode: countryCode })
             })

       $scope.$on('countryCodeReady', function (e, data) {
         dataService.getLocalEvents(data.countryCode)
                 .then(function (response) {
                   console.log(response)
                   $scope.asides = response.data._embedded.events
                 })
       })
     })
