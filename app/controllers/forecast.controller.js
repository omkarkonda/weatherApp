angular.module('forecast')
  .controller('forecastCtrl',['$scope', '$stateParams', 'weatherService', forecastCtrl]);
  function forecastCtrl($scope,$stateParams,weatherService){
    $scope.params = $stateParams;
    $scope.onChange = function (){
      weatherService.getWeather($stateParams.cityName, $scope.days).then(function(res){
        $scope.data = res.data.list;
      });
    }
    $scope.onChange();
    $scope.convertDate = function(dt){
      return new Date(dt)
    }
    $scope.convertToCelsius = function(k){
      return Math.round(parseInt(k) - 273.15)
    }
  }
