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
        if(userid=="kishore"&&password=="kishore"){
            $scope.isLogin = true;
            $state.go('userDashboard');
            console.log(true);
        }
        else{
            $scope.isLogin = false;
            $state.go('userDashboard');
            console.log(false);
        }
    }
});

routerApp.controller('jaffa',function($scope){
    $scope.name = "jaffa";
})