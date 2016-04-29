/**
 * Created by vraja on 4/16/2016.
 */


routerApp.controller('events', function($scope, $http){
    //console.log("controdadsa");

    $http.get('json/event.json').success(function (data){
        $scope.event_data = data;

        $scope.first_name = "kishore";

       // $scope.d = data.eventDate;

        console.log(data);
    });
});


routerApp.controller('dashBoardController', function($scope,$state){
    $scope.login = function(userid,password){



        if(userid=="kishore@gmail.com"&&password=="kishore"){
            $scope.isLogin = true;
            $scope.menuLog = "LOGGED IN";
            $state.go('adminDashboard');
            $scope.adminMessage = "Welcome Admin";
            console.log(true);
        }
        else{
            $scope.isLogin = false;

            $scope.menuLog = "LOGGED IN";
            $state.go('userDashboard');
            $scope.userMessage = "Welcome user";
            //console.log(userid);
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