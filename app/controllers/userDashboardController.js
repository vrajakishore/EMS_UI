/**
 * Created by vraja on 5/3/2016.
 */


routerApp.controller('userDashboardController',function($scope,$state,$location,SearchService,$stateParams,$rootScope,$http,$window) {

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

        /* User Profile */

       /* function callbackForUserProfile(data) {
            /!*console.log("IN CALL BACK");*!/
            $rootScope.userProfile = data;
            console.log($rootScope.userProfile);
        }
        $scope.userProfileUrl = "#";
        SearchService(callbackForUserProfile, $scope.userProfileUrl);*/

        /* User Upcoming Events */

        function callbackForUpcomingEvents(data) {
            /*console.log("IN CALL BACK");*/
            $rootScope.upcomingEventsData = data;
            console.log($rootScope.upcomingEventsData);
        }
        $scope.userUpcomingEventsLink = "json/upcomingEvents.json";
        SearchService(callbackForUpcomingEvents, $scope.userUpcomingEventsLink);

        /* User History */

        function callbackForUserHistory(data) {
            /*console.log("IN CALL BACK");*/
            $rootScope.userHistoryData = data;
            console.log($rootScope.userHistoryData);
        }
        $scope.userHistoryData = "json/userHistory.json";
        SearchService(callbackForUserHistory, $scope.userHistoryData);


    }
});