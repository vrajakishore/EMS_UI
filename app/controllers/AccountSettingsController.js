/**
 * Created by dimple on 5/3/2016.
 */

routerApp.controller('AccountSettingsController',function($scope,$state,$location,$stateParams,$rootScope,$http,$window){

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
});

