 angular.module('tickets-app')
  .controller('SearchController', function ($scope, $routeParams, dataService) {
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
         $scope.events = response.data._embedded.events
         var localDate = response.data._embedded.events["0"].dates.start.localDate
         var parseMonth = localDate.split('-')[1]
         $scope.month = months[parseMonth]
         console.log($scope.month)

    })

  })
