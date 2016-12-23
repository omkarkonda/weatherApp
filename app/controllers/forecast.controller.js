angular.module('forecast')
  .controller('forecastCtrl',['$scope', 'weatherService', forecastCtrl]);
  function forecastCtrl($scope, weatherService){
    $scope.onChange = function (){
      weatherService.getWeather($scope.city, $scope.days).then(function(res){
        $scope.data = res.data.list;
      });
    }

    $scope.convertDate = function(dt){
      return new Date(dt)
    }

    $scope.convertToCelsius = function(k){
      return Math.round(parseInt(k) - 273.15)
    }

  }
