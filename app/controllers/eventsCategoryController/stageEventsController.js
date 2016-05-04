/**
 * Created by mkishore on 5/4/2016.
 */

routerApp.controller('stageEventsController', function($rootScope,$scope,SearchService, $http,$state) {

    /* Search by only Movies */
    $scope.url = 'json/event.json';
    SearchService(callBackForAllStageEvents,$scope.url);
    function callBackForAllStageEvents(data) {
        $scope.event_data = data;
        console.log("All stage events data "+data);
    }

});
