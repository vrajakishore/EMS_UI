/**
 * Created by vraja on 5/3/2016.
 */


routerApp.controller('adminDashboardController',function($scope,$state,SearchService,$location,$stateParams,$rootScope,$http,$window) {

    $scope.isLogin = $rootScope.isLogin;
    $rootScope.currentLocation = $location.path();

    //$scope.detailedEvent = $rootScope.detailedEvent;

    /* Admin Edit Profile */







    /* Admin change Password */
   /* $scope.changePassword = function (newPassWord) {
        $scope.linkForNewPwd = "http://din51002665:8181/EventManagement/changePassWord?user_id="+$rootScope.idOfUser+"&password="+newPassWord;
        $http.get($scope.linkForNewPwd).then(function(resp){
            //alert(resp.data);
            $scope.changePwdSuccess();
            $scope.LoginError = false;
            setTimeout(function() {
                $('#loginErrorDiv').fadeOut('fast');
            }, 5000);
        })
    }*/




    /* Admin profile */

    /*$scope.AdminProfileLink = "http://din51002665:8181/EventManagement/adetails?userId=" + $scope.userId;
    SearchService(callbackForAdminProfile, $scope.AdminProfileLink);
    function callbackForAdminProfile(data) {
        $rootScope.AdminProfileDetails = data;
    }*/


    /*$scope.pendingEventsLink = "http://din51002665:8181/EventManagement/find";
    SearchService(pendingEventsCallBack, $scope.pendingEventsLink);
    function pendingEventsCallBack(data) {
        $rootScope.pendingEventsVO = data;
        console.log("Pending events for approval call back")
        console.log($rootScope.pendingEventsVO)
        /!*console.log(data);*!/
    }
*/

   /* $scope.allTransactionsForAdminLink = "http://din51002665:8181/EventManagement/get";
    SearchService(callbackForAllTransactions, $scope.allTransactionsForAdminLink);
    function callbackForAllTransactions(data) {
        /!*console.log("IN CALL BACK");*!/
        $rootScope.allTransactionsVO = data;
        /!*console.log(data);*!/
    }*/

});