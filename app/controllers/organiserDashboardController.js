/**
 * Created by dimple on 5/4/2016.
 */



routerApp.controller('organiserDashboardController',function($scope,$state,SearchService,$location,$stateParams,$rootScope,$http,$window) {

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
//Event Management
        $scope.createEvent = function (Details) {

            console.log(Details);
        }

        $scope.modifyEvent = function (Details) {

            console.log(Details);
        }
        $scope.removeEvent = function (Details) {
            console.log(Details);
        }

        /* Organiser Profile */

        /* function callbackForOrganiserProfile(data) {
         /!*console.log("IN CALL BACK");*!/
         $rootScope.organiserProfile = data;
         console.log($rootScope.organiserProfile);
         }
         $scope.organiserProfileUrl = "#";
         SearchService(callbackForOrganiserProfile, $scope.organiserProfileUrl);*/

        /* Organiser Upcoming Events */

        function callbackForOrganiserUpcomingEvents(data) {
            /*console.log("IN CALL BACK");*/
            $rootScope.organiserUpcomingEventsData = data;
            console.log($rootScope.organiserUpcomingEventsData);
        }
        $scope.organiserUpcomingEventsUrl = "json/upcomingEvents.json";
        SearchService(callbackForOrganiserUpcomingEvents, $scope.organiserUpcomingEventsUrl);

        /* Organiser History */

        function callbackForOrganiserHistory(data) {
            /*console.log("IN CALL BACK");*/
            $rootScope.organiserHistoryData = data;
            console.log($rootScope.organiserHistoryData);
        }
        $scope.userHistoryUrl = "json/userHistory.json";
        SearchService(callbackForOrganiserHistory, $scope.organiserHistoryUrl);
    }
});