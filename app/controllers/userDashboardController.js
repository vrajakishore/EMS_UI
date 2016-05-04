/**
 * Created by vraja on 5/3/2016.
 */


routerApp.controller('userDashboardController',function($scope,$state,$location,$stateParams,$rootScope,$http,$window) {

//Account Settings
    if(!$rootScope.isLogin){
        $("#loginModal").modal()
    }
    else{

            $scope.changePassword = function (Details) {

                console.log(Details);

            }


            $scope.editProfile = function (Details) {

                console.log(Details);

            }
            $scope.deactivateAcc = function (Details) {

                console.log(Details);

            }

        }
});