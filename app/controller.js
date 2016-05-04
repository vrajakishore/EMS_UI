/**
 * Created by vraja on 4/16/2016.
 */


routerApp.controller('eventsCtrl', function($rootScope,$scope,SearchService, $http,$state){
    //console.log("controdadsa");
    $scope.url = 'json/event.json';
    SearchService(callBackForAllEvents,$scope.url);
    function callBackForAllEvents(data) {
        $scope.event_data = data;
        console.log("All events data "+data);
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

        //console.log(userDetails);




        $rootScope.uid = userDetails.userid;
        $rootScope.password = userDetails.password;

        console.log("user details "+$rootScope.uid+" "+$rootScope.password);
        if($rootScope.userid=="kishore@gmail.com"&&$rootScope.password=="kishore"){
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
        else if($rootScope.uid=="nitin"&&$rootScope.password=="nitin"){

            console.log("organizer logged");

            $rootScope.isLogin = true;
            $scope.menuLog = "LOGGED IN";
            $rootScope.dashboardPage = "organiserDashboard";
            $state.go('organiserDashboard');
            $scope.organiserMessage = "Welcome organizer";
            $scope.dashboard = "DASHBOARD";
            console.log(true);

            /*Login success for organizer*/
            $scope.alerts = [
                { type: 'success', msg: 'Well done! You successfully logged in Organizer.' }
            ];

        }
        else if(($rootScope.uid=="dimple"&&$rootScope.password=="dimple")||($rootScope.uid=="rajdeep"&&$rootScope.password=="rajdeep")){
            $rootScope.isLogin = true;

            console.log("user logged");

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

