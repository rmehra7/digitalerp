var app = angular.module('mainApp', ['ngRoute','ngResource']);

app.config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
}).hashPrefix('!');
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

   $routeProvider

      .when('/', {
         templateUrl: 'partials/index.html',
         controller: 'IndexCtl'
      })

   $locationProvider.html5Mode(true);

}]);

app.controller('IndexCtl', function($scope, $http, $location, $route) {

   $scope.home = function(){
      $location.path('/');
   }

   $scope.about = function(){
      $location.path('/about');
   }

});