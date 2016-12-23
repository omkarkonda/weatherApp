angular.module('forecast')
.service('weatherService', ['$http', function($http){
  var API_KEY = '22bd8b483a4e5245839595b3f91cbd2d';
  this.getWeather = function(city, days){
    if(city !== undefined){
      var URL ='http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=' + days + '&appid='+ API_KEY ;    
      return $http.get(URL,{cache:true})
    }
  }
  //return getWeather;
}])
