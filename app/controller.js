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


routerApp.controller('dashBoardController', function($rootScope,$scope,$state,$sce){
    $scope.menuLog = "LOGIN";
    //$scope.dashboardPage = "#";

    $rootScope.isLogin = false;

    $scope.dashboardfn = function () {
        console.log($rootScope.isLogin)
        if($rootScope.isLogin){
            $state.go($rootScope.dashboardPage );
        }
    }


    $scope.login = function(userid,password){
        if(userid=="kishore@gmail.com"&&password=="kishore"){
            $rootScope.isLogin = true;
            $scope.menuLog = "LOGGED IN";
            $rootScope.dashboardPage = "adminDashboard";
            $state.go('adminDashboard');
            $scope.adminMessage = "Welcome Admin";
            $scope.dashboard = "DASHBOARD";

            console.log(true);
        }
        else{
            $rootScope.isLogin = true;

            $scope.menuLog = "LOGGED IN";
            $rootScope.dashboardPage = "userDashboard";
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

routerApp.controller('loginController', function($scope) {
    
})