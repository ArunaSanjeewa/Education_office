/**
 * Created by supun on 11/8/2017.
 */
'use strict';

angular.module('myApp.error-sigup', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/error-sigup/:id?', {
            templateUrl: 'views/error-sigup/error-sigup.html',
            controller: 'error-sigupCtrl'
        });
    }])

    .controller('error-sigupCtrl', [function() {

    }]);