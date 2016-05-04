/**
 * Created by mkishore on 5/4/2016.
 */

routerApp.controller('moviesEventsController', function($rootScope,$scope,SearchService, $http,$state) {

    /* Search by only Movies */
    $scope.url = 'json/event.json';
    SearchService(callBackForAllMoviesEvents,$scope.url);
    function callBackForAllMoviesEvents(data) {
        $scope.event_data = data;
        console.log("All movies events data "+data);
    }

});
