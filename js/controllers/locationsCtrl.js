angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainService) {

  $scope.locationsData = mainService.travelInfo;

});
