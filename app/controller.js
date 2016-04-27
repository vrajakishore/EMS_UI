/**
 * Created by vraja on 4/16/2016.
 */


routerApp.controller('findActor', function($scope, $http){
    //console.log("controdadsa");

    $http.get('json/test2.json').success(function (data){
        $scope.employees = data.employees;
        console.log(data.employees);
    });
});

routerApp.controller('findFilm', function($scope, $http){
    //console.log("controdadsa");

    $http.get('json/test.json').success(function (data){
        $scope.employees = data.employees;
        console.log(data.employees);
    });

    $scope.rate = 3;
    $scope.max = 5;
    $scope.isReadonly = false;



    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };
});

routerApp.controller('ErrorCtrl', ErrorCtrl);
function ErrorCtrl(){};