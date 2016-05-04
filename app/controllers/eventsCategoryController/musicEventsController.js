/**
 * Created by mkishore on 5/4/2016.
 */

routerApp.controller('musicEventsController', function($rootScope,$scope,SearchService, $http,$state) {

    /* Search by only Music */
    $scope.url = 'json/event.json';
    SearchService(callBackForAllMusicEvents,$scope.url);
    function callBackForAllMusicEvents(data) {
        $scope.event_data = data;
        console.log("All music events data "+data);
    }

});
