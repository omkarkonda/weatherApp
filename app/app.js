'use strict';
// Declare app level module which depends on views, and components
angular.module('forecast', ['ui.router'])
.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('page',{
        url:'/',
        views:{
          'header':{
            templateUrl: 'common/header.html'
          },
          'citylist':{
            templateUrl:'templates/sidebar.tmpl.html',
            controller: ['$scope', function($scope){
              // $scope.$watch('filteredCityList', function(){
              //   console.log('citylist', $scope.filteredCityList);
              // })
            }]
          },
          'forecast':{
            templateUrl: 'templates/home.template.html',
            controller: ['$scope', '$rootScope', '$state', '$stateParams','weatherService',
              function($scope,$rootScope,$state,$stateParams,weatherService){
                $scope.city = ''; //$stateParams.cityName;
                $scope.days = 2;
                $scope.cityList = [];

                $scope.getForecast = function(){
                  if($scope.city.length>3){
                    $scope.addCitytolist($scope.city);
                    $state.go('page.city',{cityName:$scope.city})
                 }
                 $scope.city = '';
               }
               $scope.addCitytolist = function(city){
                 $scope.cityList = $scope.cityList.concat(city);
                 $rootScope.filteredCityList = $scope.cityList.filter(function(city, pos, self){
                    return self.indexOf(city) == pos;
                 })
               }
            }]
          }
        }
      })
      .state('page.city', {
        url:'city/:cityName',
        views:{
          'weather':{
            templateUrl: 'templates/forecast.template.html',
            controller: 'forecastCtrl'
          }
        }
      })
  $urlRouterProvider.otherwise('/');
}]);
