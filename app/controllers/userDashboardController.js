/**
 * Created by vraja on 5/3/2016.
 */


routerApp.controller('userDashboardController',function($scope,$state,$location,$stateParams,$rootScope,$http,$window) {

//Account Settings
        if(!$rootScope.isLogin){

            $scope.changePassword= function(Details){

                console.log(Details);

            }}


        $scope.editProfile= function(Details){

            console.log(Details);

        }
        $scope.deactivateAcc= function(Details){

            console.log(Details);

        }
//Event Management
    $scope.createEvent= function(Details){

             console.log(Details);
        }

$scope.modifyEvent= function(Details){

        console.log(Details);
   }
    $scope.removeEvent= function(Details) {
        console.log(Details);
    }

});