/**
 * Created by vraja on 4/16/2016.
 */


routerApp.controller('events', function($scope, $http){
    //console.log("controdadsa");

    $http.get('json/event.json').success(function (data){
        $scope.event_data = data;

        $scope.first_name = "kishore";

        console.log(data);
    });
});


routerApp.controller('dashBoardController', function($scope,$state){
    $scope.menuLog = "LOGIN";
    $scope.dashboardPage = "#";


    $scope.login = function(userid,password){
        if(userid=="kishore@gmail.com"&&password=="kishore"){
            $scope.isLogin = true;
            $scope.menuLog = "LOGGED IN";
            $scope.dashboardPage = "adminDashboard";
            $state.go('adminDashboard');
            $scope.adminMessage = "Welcome Admin";
            $scope.dashboard = "DASHBOARD";

            console.log(true);
        }
        else{
            $scope.isLogin = true;

            $scope.menuLog = "LOGGED IN";
            $scope.dashboardPage = "userDashboard";
            $state.go('userDashboard');
            $scope.userMessage = "Welcome user";
            //console.log(userid);
            $scope.dashboard = "DASHBOARD"

            console.log(false);
        }
    }

    $scope.logout = function(){
        $scope.isLogin = false;
        $state.go('home');
        $scope.menuLog = "LOGIN";
    }
});

routerApp.controller('jaffa',function($scope){
    $scope.name = "jaffa";
})