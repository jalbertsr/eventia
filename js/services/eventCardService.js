/* global angular */

(function () {
  angular.module('tickets-app')
    .factory('eventCardService', function () {
      function customDataCard (eventApi) {
        if (eventApi.data.dates.start.localDate) {
          var localDate = eventApi.data.dates.start.localDate.split('-')
          var date = localDate[2] + '/' + localDate[1] + '/' + localDate[0]
        }
        if (eventApi.data.dates.start.localTime) {
          var localTime = eventApi.data.dates.start.localTime.split(':', 2)
          var time = localTime[0] + ':' + localTime[1] + 'h'
        }
        if (eventApi.data.sales.public.startDateTime) {
          var startDateSales1 = eventApi.data.sales.public.startDateTime.split('-')
          var startDateSales2 = startDateSales1[2].split('T', 1)
          var startDateSalesFinal = startDateSales2 + '/' + startDateSales1[1] + '/' + startDateSales1[0] + ' at '
          var startHourSales1 = eventApi.data.sales.public.startDateTime.split(':')
          var startHourSales2 = startHourSales1[0].split('T')
          var startHourSalesFinale = startHourSales2[1] + ':' + startHourSales1[1]
        }
        if (eventApi.data.sales.public.endDateTime) {
          var endDateSales1 = eventApi.data.sales.public.endDateTime.split('-')
          var endDateSales2 = endDateSales1[2].split('T', 1)
          var endDateSalesFinal = endDateSales2 + '/' + endDateSales1[1] + '/' + endDateSales1[0] + ' at '
          var endHourSales1 = eventApi.data.sales.public.endDateTime.split(':')
          var endHourSales2 = endHourSales1[0].split('T')
          var endHourSalesFinale = endHourSales2[1] + ':' + endHourSales1[1]
        }
        var adress = eventApi.data._embedded.venues['0'].address.line1 + ', ' + eventApi.data._embedded.venues['0'].postalCode + ', ' + eventApi.data._embedded.venues['0'].city.name + ', ' + eventApi.data._embedded.venues['0'].country.name
        var buyLinksExist = false

        if (eventApi.data._embedded.venues[0].url || eventApi.data.url) buyLinksExist = true

        if (eventApi.data._embedded.venues['0'].location) {
          var latitude = eventApi.data._embedded.venues['0'].location.latitude
          var longitude = eventApi.data._embedded.venues['0'].location.longitude
        }
        return {
          localDate: date,
          localTime: time,
          salesStart: startDateSalesFinal + startHourSalesFinale,
          salesEnd: endDateSalesFinal + endHourSalesFinale,
          adress: adress,
          buyLinksExist: buyLinksExist,
          latitude: latitude,
          longitude: longitude
        }
      }
      return {
        customDataCard: customDataCard
      }
    })
})()
