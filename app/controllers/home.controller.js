angular.module('forecast')
.controller('homeCtrl', ['$scope', '$state', '$location', 'cityService', 'weatherService', homeCtrl]);

function homeCtrl($scope, $state, $location, cityService, weatherService){
    $scope.getForecast = function($state){
      weatherService.getWeather($scope.city, $scope.days).then(function(res){
        $scope.data = res.data.list;
      });
      $state.go('/results')
    }
}
