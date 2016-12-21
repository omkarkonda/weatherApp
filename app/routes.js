angular.module('routes', ['ui.router'])
.config(['$stateProvider', function($stateProvider){
    $stateProvider
    .state({
        name: 'home',
        url:'/',
        templateUrl: 'templates/home.template.html',
        controller:'homeCtrl'
    })
    .state({
      name: 'forecast',
      url:'/forecast',
      templateUrl:"templates/forecast.template.html",
      controller: 'forecastCtrl'
    })    
}])
