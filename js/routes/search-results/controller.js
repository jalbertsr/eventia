 angular.module('tickets-app')
     .controller('SearchController', function($scope, $routeParams, dataService) {
         var keyword = $routeParams.keyword
         console.log(keyword)

         var months = {
             '1': 'JAN',
             '2': 'FEB',
             '3': 'MAR',
             '4': 'APR',
             '5': 'MAY',
             '6': 'JUN',
             '7': 'JUL',
             '8': 'AUG',
             '9': 'SEPT',
             '10': 'OCT',
             '11': 'NOV',
             '12': 'DEC'
         }

         dataService.getKeywordSearch(keyword)
             .then(function(response) {
                 console.log(response)
                 $scope.events = []

                 var eventsResponse = response.data._embedded.events
                 eventsResponse.forEach(function(obj) {
                     var localDate = obj.dates.start.localDate
                     var parseMonth = localDate.split('-')[1]
                     var month = months[parseMonth]
                     var day = localDate.split('-')[2]


                     $scope.events.push({
                         month: month,
                         day: day,
                         name: obj.name,
                         country: obj._embedded.venues[0].country.name,
                         city: obj._embedded.venues[0].city.name,
                         imageUrl: obj.images[0].url,
                         facbookUrl: obj._embedded.attractions[0].externalLinks.facebook[0].url,
                         twitterUrl: obj._embedded.attractions[0].externalLinks.twitter[0].url,
                         artistUrl: obj._embedded.attractions[0].externalLinks.homepage[0].url
                     })
                 })

                 console.log($scope.events)

             })

     })