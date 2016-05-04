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

//////////////////////////////////////////////////////////////////////////////////////////

    /* Rating section works here */


    $scope.ratingURL = 'http://din52002787:9999/BME/showDislikes?name='+$rootScope.eventId;
    //console.log($scope.commentsURL);
    SearchService(callbackForRating,$scope.ratingURL);

    function callbackForRating(data){
        /*console.log("IN CALL BACK OF COMMENTS");*/
        $rootScope.rating =  data;
        console.log("rating "+$rootScope.rating);
    };

/////////////////////////////////////////////////////////////////////////////////////////////////////////
    /* Comment section works here */

    $scope.commentOnEvent = function(commentsBox){
        console.log(commentsBox);

    }

   /* $scope.commentsURL = 'http://din51002665:8181/EventManagement/findComment?eventId='+$rootScope.eventId;*/

    $scope.commentsURL = 'json/comment.json'
    //console.log($scope.commentsURL);
    SearchService(callbackForComments,$scope.commentsURL);

    function callbackForComments(data){
        /*console.log("IN CALL BACK OF COMMENTS");*/
        $rootScope.comments =  data;
        console.log("comments "+$rootScope.comments);
    };
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////


    
    
});