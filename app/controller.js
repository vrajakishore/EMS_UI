/**
 * Created by vraja on 4/16/2016.
 */


routerApp.controller('eventsCtrl', function($rootScope,$scope,SearchService, $http,$state){
    //console.log("controdadsa");
    $scope.url = 'json/event.json';
    SearchService(callBackForAllEvents,$scope.url);
    
    function callBackForAllEvents(data) {
        $scope.event_data = data;

        //$rootScope.eventID = data.eventId;
        //console.log( data.eventId+" hi");

        $scope.first_name = "kishore";

        console.log(data);
    }
    
   /* $http.get('json/event.json').success(function (data){
        $scope.event_data = data;

        //$rootScope.eventID = data.eventId;
        //console.log( data.eventId+" hi");

        $scope.first_name = "kishore";

        console.log(data);
    });*/

    $scope.eventDetails = function (g) {

        //console.log($rootScope.eventId+" this is eventID")
        console.log(g)
        $state.go('.eventDetails',  {myParam:g});

        
    }
        


    /*$scope.goBack = function(){

        console.log("asdfasasd");
        $state.go('events');
    }*/
});


routerApp.controller('dashBoardController', function($scope,$location,$state,$stateParams,$rootScope,SearchService,$http){
    $scope.menuLog = "LOGIN";
    //$scope.dashboardPage = "#";

    $rootScope.isLogin = false;

    $scope.dashboardfn = function () {
        console.log($rootScope.isLogin)
        if($rootScope.isLogin){
            $state.go($rootScope.dashboardPage );
        }
    }


    $scope.login = function(userDetails){

        console.log(userDetails);

        $rootScope.uid = userDetails.userid;

        if(userDetails.userid=="kishore@gmail.com"&&userDetails.password=="kishore"){
            $rootScope.isLogin = true;



            $scope.menuLog = "LOGGED IN";
            $rootScope.dashboardPage = "adminDashboard";
            $state.go('adminDashboard');
            $scope.adminMessage = "Welcome Admin";
            $scope.dashboard = "DASHBOARD";
            console.log(true);

            /*Login success for admin*/
            $scope.alerts = [
                { type: 'success', msg: 'Well done! You successfully logged in Admin.' }
            ];
        }
        else{
            $rootScope.isLogin = true;

            $scope.menuLog = "LOGGED IN";
            $rootScope.dashboardPage = "userDashboard";
            $state.go('userDashboard');
            $scope.userMessage = "Welcome user";
            //console.log(userid);
            $scope.dashboard = "DASHBOARD";
            console.log(false);


            /* login success for user */
            $scope.alerts = [
                { type: 'success', msg: 'Well done! You successfully logged in user.' }
            ];
        }
    }

    $scope.logout = function(){
        $rootScope.isLogin = false;
        $state.go('home');
        $scope.menuLog = "LOGIN";

        $scope.alerts = [
            { type: 'success', msg: 'Well done! You have been successfully logged out.' }
        ];
    }




});

routerApp.controller('jaffa',function($scope){
    $scope.name = "jaffa";
})

