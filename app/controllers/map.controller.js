angular.module('forecast')
  .controller('mapCtrl',['$scope', '$state', 'weatherService', mapCtrl]);
    function mapCtrl($scope, $state, weatherService){
      $scope.MAP_API_KEY = 'AIzaSyBeMJigrN-TJ9oiYZ7M4Igm895k8s2Qlfs';
      $scope.cityData = weatherService.cityData;

      $scope.mapUrl = 'https://www.google.com/maps/embed/v1/view?key='+
                       $scope.MAP_API_KEY+'&center='+$scope.cityData.coord.lat+','
                       +$scope.cityData.coord.lon+'&zoom=18&maptype=roadmap';


      console.log($scope.mapUrl);
    }
