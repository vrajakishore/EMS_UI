/**
 * Created by mkishore on 5/4/2016.
 */


routerApp.controller('searchByPopularityController', function($rootScope,$scope,SearchService, $http,$state) {

    /* Search by only Category in search page */
    $scope.url = 'json/event.json';
    SearchService(callBackForPopularitySearchEvents,$scope.url);
    function callBackForPopularitySearchEvents(data) {
        $scope.event_data = data;
        console.log("All popularity events data "+data);
    }

});

routerApp.controller('searchByVenueController', function($rootScope,$scope,SearchService, $http,$state) {

    /* Search by only Category in search page */
    $scope.url = 'json/event.json';
    SearchService(callBackForVenueSearchEvents,$scope.url);
    function callBackForVenueSearchEvents(data) {
        $scope.event_data = data;
        console.log("All venue events data "+data);
    }

});

routerApp.controller('searchPerformerController', function($rootScope,$scope,SearchService, $http,$state) {

    /* Search by only Category in search page */
    $scope.url = 'json/event.json';
    SearchService(callBackForPerformerSearchEvents,$scope.url);
    function callBackForPerformerSearchEvents(data) {
        $scope.event_data = data;
        console.log("All performer events data "+data);
    }

});

routerApp.controller('searchCertificateController', function($rootScope,$scope,SearchService, $http,$state) {

    /* Search by only Category in search page */
    $scope.url = 'json/event.json';
    SearchService(callBackForCertificateSearchEvents,$scope.url);
    function callBackForCertificateSearchEvents(data) {
        $scope.event_data = data;
        console.log("All certificate events data "+data);
    }

});


