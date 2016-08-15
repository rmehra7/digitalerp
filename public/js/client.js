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
         controller: 'NavCtl'
      })

      .when('/about', {
         templateUrl: 'partials/about.html',
         controller: 'AboutCtl'
      })

      .when('/erp', {
         templateUrl: 'partials/erp-implementation.html',
         controller: 'erpCtl'
      })

      .when('/digitalmarketing', {
         templateUrl: 'partials/digital-marketing.html',
         controller: 'DigitalMarketingCtl'
      })

      .when('/mobile', {
         templateUrl: 'partials/mobile.html',
         controller: 'MobileCtl'
      })

      .when('/website', {
         templateUrl: 'partials/website.html',
         controller: 'AboutCtl'
      })

      .when('/team', {
         templateUrl: 'partials/team.html',
         controller: 'AboutCtl'
      })

      .when('/contact', {
         templateUrl: 'partials/contact.html',
         controller: 'AboutCtl'
      })



   $locationProvider.html5Mode(true);

}]);

app.controller('NavCtl', function($scope, $http, $location, $route) {

   $scope.home = function(){
      $location.path('/');
   }

   $scope.about = function(){
      $location.path('/about');
   }

   $scope.erp = function() {
      $location.path('/erp')
   }

   $scope.website = function() {
      $location.path('/website')
   }

   $scope.digitalmarketing = function() {
      $location.path('/digitalmarketing')
   }

   $scope.mobile = function() {
      $location.path('/mobile')
   }

   $scope.contact = function() {
      $location.path('/contact')
   }

   $scope.team = function() {
      $location.path('/team')
   }

});