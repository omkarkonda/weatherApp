'use strict';
// Declare app level module which depends on views, and components
angular.module('forecast', ['ui.router'])
.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('forecast',{
        url:'/',
        templateUrl: 'templates/home.template.html',
        controller: ['$scope', '$state', '$stateParams','weatherService',
          function($scope,$state,$stateParams,weatherService){
            $scope.city = "";
            $scope.days = 2;          
            $scope.getForecast = function(){
              if($scope.city.length>3){
                //$stateParams.city = $scope.city;
                //$state.city.replace('/\s/g','');
                $scope.cityList.concat($scope.city);
                $scope.addCitytolist($scope.city);
                weatherService.getWeather($scope.city, $scope.days).then(function(res){
                  $scope.data = res.data.list;
                });
                $state.go('forecast.city',{cityName:$scope.city})
             }
           }
           $scope.addCitytolist = function(city){
             $scope.filteredCityList = $scope.cityList.filter(function(city, arr){
                if(city !== $scope.city){
                  return true;
                }
                return false;
             })
             console.log($scope.filteredCityList)
           }

        }]
      })
      .state('forecast.city', {
        url:':cityName',
        views:{
          'weather':{
            templateUrl: 'templates/forecast.template.html',
            controller: 'forecastCtrl'
          }
        }
      })
  $urlRouterProvider.otherwise('/');
}]);
