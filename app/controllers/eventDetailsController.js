/**
 * Created by vraja on 5/2/2016.
 */


routerApp.controller('eventDetailsController', function($scope,$location,$state,$stateParams,SearchService,$rootScope,$http){
    //console.log("this is Events Details Controller");
    console.log($stateParams.myParam  +" "+$rootScope.isLogin);



    $rootScope.currentLocation = $location.path();
    console.log($rootScope.currentLocation+" "+$stateParams.myParam.event_id +" user id "+$rootScope.uid);

    $rootScope.detailedEvent = [$stateParams.myParam];
    //$scope.detailedEvent =  $rootScope.detailedEvent;

    $rootScope.eventId  = $stateParams.myParam.event_id;
    console.log($rootScope.detailedEvent+" root event id "+$rootScope.eventId);

    /*if($stateParams.myParam!=null) {
        $rootScope.eventId = $stateParams.myParam;
        $scope.commentTextOnEvent='';
        $scope.replyText='';
        console.log("EventId is : ----" + $rootScope.eventId);
    }*/




    
    
});