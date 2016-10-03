angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainService) {

  $scope.packagesData = mainService.travelInfo;

});
