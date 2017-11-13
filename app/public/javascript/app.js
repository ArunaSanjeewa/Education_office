'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.view2',
  'myApp.account-dep',
  'myApp.development-dep',
  'myApp.planning-dep',
  'myApp.zonal_director-dep',
  'myApp.add-account',
  'myApp.more-infor',
  'myApp.user-create',
  'myApp.all-users',
  'myApp.error-sigup',
  'myApp.add-development',
  'myApp.add-planning',
  'myApp.add-zonal_director',
  'myApp.manage-occupation',
  'myApp.version'
])
    .filter('startFrom', function () {
      return function (input, start) {
        if (input) {
          start = +start;
          return input.slice(start);
        }
        return [];
      };
    })
    
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
 

}]);


