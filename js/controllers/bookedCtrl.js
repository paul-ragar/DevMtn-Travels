angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainService) {

  for (var i = 0; i < mainService.travelInfo.length; i++) {
    if ($stateParams.id === mainService.travelInfo[i].city) {
      $scope.bookedCity = mainService.travelInfo[i].city;
      $scope.bookedImage = mainService.travelInfo[i].image;
    }
  }

});
