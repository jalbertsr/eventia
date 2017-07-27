angular.module('tickets-app')
  .controller('DetailsEventController', function ($scope, $routeParams, dataService) {
    var idEvent = $routeParams.id
    $scope.eventInformation = []
    console.log(idEvent)
    dataService.getEvent(idEvent)
        .then(function (response) {
          $scope.event = response.data
          console.log(response)
          if (response.data.dates.start.localDate) {
            var localDate = response.data.dates.start.localDate.split('-')
            var date = localDate[2] + '/' + localDate[1] + '/' + localDate[0]
          }
          if (response.data.dates.start.localTime) {
            var localTime = response.data.dates.start.localTime.split(':', 2)
            var time = localTime[0] + ':' + localTime[1] + 'h'
          }
          if (response.data.sales.public.startDateTime) {
            var startDateSales1 = response.data.sales.public.startDateTime.split('-')
            var startDateSales2 = startDateSales1[2].split('T', 1)
            var startDateSalesFinal = startDateSales2 + '/' + startDateSales1[1] + '/' + startDateSales1[0] + ' at '
            var startHourSales1 = response.data.sales.public.startDateTime.split(':')
            var startHourSales2 = startHourSales1[0].split('T')
            var startHourSalesFinale = startHourSales2[1] + ':' + startHourSales1[1]
          }
          if (response.data.sales.public.endDateTime) {
            var endDateSales1 = response.data.sales.public.endDateTime.split('-')
            var endDateSales2 = endDateSales1[2].split('T', 1)
            var endDateSalesFinal = endDateSales2 + '/' + endDateSales1[1] + '/' + endDateSales1[0] + ' at '
            var endHourSales1 = response.data.sales.public.endDateTime.split(':')
            var endHourSales2 = endHourSales1[0].split('T')
            var endHourSalesFinale = endHourSales2[1] + ':' + endHourSales1[1]
          }
          var adrees = response.data._embedded.venues['0'].address.line1 + ', ' + response.data._embedded.venues['0'].postalCode + ', ' + response.data._embedded.venues['0'].city.name + ', ' + response.data._embedded.venues['0'].country.name
          var buyLinksExist = false

          if (response.data._embedded.venues[0].url || response.data.url) buyLinksExist = true

          console.log('buyLinksExist=' + buyLinksExist)

          if (response.data._embedded.venues['0'].location) {
            $scope.latitude = response.data._embedded.venues['0'].location.latitude
            $scope.longitude = response.data._embedded.venues['0'].location.longitude
          }

          $scope.eventInformation.push({
            localDate: date,
            localTime: time,
            salesStart: startDateSalesFinal + startHourSalesFinale,
            salesEnd: endDateSalesFinal + endHourSalesFinale,
            adrees: adrees,
            buyLinksExist: buyLinksExist
          })
        })
  })
