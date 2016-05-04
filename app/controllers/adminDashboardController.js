/**
 * Created by vraja on 5/3/2016.
 */


routerApp.controller('adminDashboardController',function($scope,$state,$location,$stateParams,$rootScope,$http,$window) {

    $scope.isLogin = $rootScope.isLogin;
    $rootScope.currentLocation = $location.path();

    //$scope.detailedEvent = $rootScope.detailedEvent;


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