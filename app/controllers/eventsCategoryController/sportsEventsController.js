/**
 * Created by mkishore on 5/4/2016.
 */

routerApp.controller('sportsEventsController', function($rootScope,$scope,SearchService, $http,$state) {

    /* Search by only Movies */
    $scope.url = 'json/event.json';
    SearchService(callBackForAllSportsEvents,$scope.url);
    function callBackForAllSportsEvents(data) {
        $scope.event_data = data;
        console.log("All sports events data "+data);
    }

});
