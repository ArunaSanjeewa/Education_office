'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home/home.html',
            controller: 'homectrl'
        });
    }])

    .controller('homectrl', function($http,$scope) {
        console.log("ddddddddddd");
        var baseurl = '/api';
        $scope.Unfinishedreq=0;
        $scope.finishedreq=0;
        $http.get(baseurl+'/account_req_unm').success (function (datafromRouter) {

            $scope.Unfinishedreq=datafromRouter.NOT_finsh;
            $scope.finishedreq=datafromRouter.finsh;

        })
        $http.get(baseurl+'/develop_req_unm').success (function (datafromRouter) {

            console.log(datafromRouter)
            $scope.Develop_Unfinishedreq=datafromRouter.NOT_finsh;
            $scope.Develop_finishedreq=datafromRouter.finsh;

        })
        $http.get(baseurl+'/planning_req_unm').success (function (datafromRouter) {

            console.log(datafromRouter)
            $scope.Planning_Unfinishedreq=datafromRouter.NOT_finsh;
            $scope.Planning_finishedreq=datafromRouter.finsh;

        })
        $http.get(baseurl+'/Zdirector_req_unm').success (function (datafromRouter) {

            console.log(datafromRouter)
            $scope.Zdirector_Unfinishedreq=datafromRouter.NOT_finsh;
            $scope.Zdirector_finishedreq=datafromRouter.finsh;

        })

    });