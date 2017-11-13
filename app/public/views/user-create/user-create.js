/**
 * Created by supun on 11/8/2017.
 */
'use strict';

angular.module('myApp.user-create', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/user-create', {
            templateUrl: 'views/user-create/user-create.html',
            controller: 'user-createCtrl'
        });
    }])

    .controller('user-createCtrl', function($http, $scope) {
console.log("dfldjfoj;")
        var baseurl = '/api';
        $scope.UserCount=0;
        var userCount=function () {
            $http.get(baseurl+'/userCount').success(function (respons) {
                $scope.UserCount=respons;
            })

        }

        userCount();
    })


