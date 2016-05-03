/**
 * Created by vraja on 5/3/2016.
 */

routerApp.service('PostService',function($http){
    return function(callback,url,obj){
        $http.post(url,angular.toJson(obj)).then(function(resp){
            callback(resp.data)
        });
    }
});