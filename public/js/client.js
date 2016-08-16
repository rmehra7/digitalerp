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
         controller: 'WebCtl'
      })

      .when('/team', {
         templateUrl: 'partials/team.html',
         controller: 'TeamCtl'
      })

      .when('/contact', {
         templateUrl: 'partials/contact.html',
         controller: 'CntCtl'
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

app.service('MetaService', function() {
       var title = '';
       var metaDescription = '';
       var metaKeywords = '';
       return {
          set: function(newTitle, newMetaDescription, newKeywords) {
              metaKeywords = newKeywords;
              metaDescription = newMetaDescription;
              title = newTitle; 
          },
          metaTitle: function(){ return title; },
          metaDescription: function() { return metaDescription; },
          metaKeywords: function() { return metaKeywords; }
       }
    });

   app.controller('AboutCtl',function($scope,$rootScope,MetaService){
      $rootScope.metaservice = MetaService;
      $rootScope.metaservice.set("DIGITAL ERP: About","desc","blah blah");
   });

   app.controller('erpCtl',function($scope,$rootScope,MetaService){
      $rootScope.metaservice = MetaService;
      $rootScope.metaservice.set("DIGITAL ERP: Erp Implementation","desc","blah blah");
   });

   app.controller('DigitalMarketingCtl',function($scope,$rootScope,MetaService){
      $rootScope.metaservice = MetaService;
      $rootScope.metaservice.set("DIGITAL ERP: Digital Marketing","desc","blah blah");
   });

   app.controller('MobileCtl',function($scope,$rootScope,MetaService){
      $rootScope.metaservice = MetaService;
      $rootScope.metaservice.set("DIGITAL ERP: Mobile","desc","blah blah");
   });

   app.controller('WebCtl',function($scope,$rootScope,MetaService){
      $rootScope.metaservice = MetaService;
      $rootScope.metaservice.set("DIGITAL ERP: Website","desc","blah blah");
   });

   app.controller('TeamCtl',function($scope,$rootScope,MetaService){
      $rootScope.metaservice = MetaService;
      $rootScope.metaservice.set("DIGITAL ERP: Team","desc","blah blah");
   });

   app.controller('CntCtl',function($scope,$rootScope,MetaService){
      $rootScope.metaservice = MetaService;
      $rootScope.metaservice.set("DIGITAL ERP: Contact","desc","blah blah");
   });