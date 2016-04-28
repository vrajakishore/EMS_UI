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

routerApp.controller('jaffa',function($scope){
    $scope.name = "jaffa";
})