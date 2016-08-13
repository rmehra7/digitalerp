var mainApp = angular.module("mainApp", ['ngRoute']);
         mainApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/index', {
               templateUrl: 'index.html',
            }).
            
            when('/about', {
               templateUrl: 'about.html',
            }).

            when('/erp-implementation', {
               templateUrl: 'erp-implementation.html',
            }).

            when('/website', {
               templateUrl: 'website.html',
            }).

            when('/seo', {
               templateUrl: 'seo.html',
            }).

            when('/digital-marketing', {
               templateUrl: 'digital-marketing.html',
            }).
            
            otherwise({
               redirectTo: '/index'
            });
         }]);