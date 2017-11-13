/**
 * Created by supun on 11/5/2017.
 */
angular.module('myApp.more-infor', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/more-infor/:id?', {
            templateUrl: 'views/more-infor/more-infor.html',
            controller: 'more-inforCtrl'
        });
    }])

    .controller('more-inforCtrl', function($http, $scope, $window, $routeParams, $location) {
          var ID;
         var baseurl = '/api';
         var Req_dep;
         var para = $routeParams.id;
        var getallInfor = function () {
            $http.get(baseurl + '/more-infor/' + para).success(function (datafromRouter) {
                Req_dep=datafromRouter.Se_depart;
                $scope.name=datafromRouter.name;
                $scope.Req_no=datafromRouter.Req_no,
                $scope.Create_time=datafromRouter.Create_time;
                $scope.occupation=datafromRouter.occupation;
                $scope.occupation_place=datafromRouter.occupation_place;
                $scope.tele_no=datafromRouter.tele_no;
                $scope.address=datafromRouter.address;
                $scope.reason=datafromRouter.reason;
                $scope.Status=datafromRouter.Status;
                $scope.id=datafromRouter._id;
                if(datafromRouter.Status=="COMPLET") {

                    $scope.showSave = true;
                    $scope.showBtns = true;


                    var comple_user = "That work complet by " + datafromRouter.Local.fullName;
                    $scope.user_name = comple_user;
                    $scope.creater_name = datafromRouter.Local.fullName;
                    $scope.creater_email = datafromRouter.Local.email;
                    $scope.creater_deprt = datafromRouter.Local.department;
                    $scope.creater_Descr = datafromRouter.description;
                    $scope.completed_time = datafromRouter.comlepted_time;
                    $scope.user_Proces="I Got this work";
                }
                if(datafromRouter.Status=="NOT FINISH") {
                    $scope.doneBtn =false;
                    $scope.showSave = true;
                    $scope.showBtns = true;


                }
                if(datafromRouter.Status=="Processing") {
                    $scope.showSave = true;
                    $scope.showBtns2 = true;
                    $scope.doneBtn =true;
                    var comple_user = "That Work Processing  by " + datafromRouter.Local.fullName;
                    $scope.user_name = comple_user;

                }

        
            });
        
        
        
        }
        getallInfor();
         $scope.completed_user=function () {
             console.log("completed_usercompleted_usercompleted_usercompleted_usercompleted_user")
         }

        $scope.update=function () {
            $scope.error_email="";
            $scope.error_password="";

            ID=$scope.id;
            var comform_arr={
                email:$scope.local.email,
                password :$scope.local.password,
                description:$scope.local.description,
                id:$scope.id,
                status:"done"

            }


            $http.post(baseurl+'/comfor',comform_arr).success(function (respons) {
                console.log(respons);
                if(respons=="Error_email"){
                    console.log("Error_emailError_email")
                    $scope.error_email="'No account exists for that email.";
                }
                if(respons=="Error_password"){
                  
                    $scope.error_password="if the user is found but the password is wrong";
                }
                if(respons.result==true){
                    console.log("resultresultresultresultresultresultresultresultresult")
                            $scope.local="";
                    $scope.complet="   Comform Complet";



                    $('#myModal-done').modal('hide');


                    if(Req_dep=="Account") {
                        console.log(Req_dep+"qwe")
                        $location.path( '/account-dep');}

                       if(Req_dep=="Develop") {
                           console.log(Req_dep+"qwe")
                           $location.path( '/development-dep');}
                    if(Req_dep=="Planning") {
                        console.log(Req_dep+"qwe")
                        $location.path( '/planning-dep');}
                    if(Req_dep=="ZDirector") {
                        console.log(Req_dep+"qwe")
                        $location.path( '/zonal_director-dep');}
                   //  $location.path( '/development-dep');

                   // $location.path( '/more-infor/'+ID);


                }


            })



        }
        $scope.got_work=function () {
            $scope.error_email="";
            $scope.error_password="";

            ID=$scope.id;
            var comform_arr={
                email:$scope.local.email,
                password :$scope.local.password,
                description:$scope.local.description,
                id:$scope.id,
                status:"Got_work"
            }


            $http.post(baseurl+'/comfor',comform_arr).success(function (respons) {
                console.log(respons);
                if(respons=="Error_email"){
                    console.log("Error_emailError_email")
                    $scope.error_email="'No account exists for that email.";
                }
                if(respons=="Error_password"){

                    $scope.error_password="if the user is found but the password is wrong";
                }
                if(respons.result==true){
                    console.log("resultresultresultresultresultresultresultresultresult")
                    $scope.local="";
                    $scope.complet="   Comform Complet";



                    $('#myModal-done').modal('hide');


                    if(Req_dep=="Account") {
                        console.log(Req_dep+"qwe")
                        $location.path( '/account-dep');}

                    if(Req_dep=="Develop") {
                        console.log(Req_dep+"qwe")
                        $location.path( '/development-dep');}
                    if(Req_dep=="Planning") {
                        console.log(Req_dep+"qwe")
                        $location.path( '/planning-dep');}
                    if(Req_dep=="ZDirector") {
                        console.log(Req_dep+"qwe")
                        $location.path( '/zonal_director-dep');}
                    //  $location.path( '/development-dep');

                    // $location.path( '/more-infor/'+ID);


                }


            })



        }
        // if($scope.Status==""){}

    });