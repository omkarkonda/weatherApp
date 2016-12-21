angular.module('forecast')
.controller('homeCtrl', ['$scope', '$location', 'cityService', homeCtrl]);

function homeCtrl($scope, $location, cityService){
    $scope.city = cityService.city;
    $scope.days = cityService.days;

    $scope.$watch('city', function(){
      cityService.city = $scope.city;
      cityService.days = $scope.days
    })

    $scope.submit = function(){
      if($scope.city)
      $location.path("/forecast");
    }
}
