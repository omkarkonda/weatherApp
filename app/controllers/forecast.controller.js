angular.module('forecast')
  .controller('forecastCtrl',['$scope','$state', '$stateParams', 'weatherService', forecastCtrl]);

  function forecastCtrl($scope,$state,$stateParams,weatherService){
    $scope.params = $stateParams;
    $scope.onChange = function (){
      weatherService.getWeather($stateParams.cityName, $scope.days).then(function(res){
        $scope.data = res.list;
        weatherService.cityData = res.city;
      });
    }
    $scope.onChange();
    $scope.convertDate = function(dt){
      return new Date(dt)
    }
    $scope.convertToCelsius = function(k){
      return Math.round(parseInt(k) - 273.15)
    }
    $scope.showMap = function(){
      $state.go('page.city.map',{});
    }
  }
