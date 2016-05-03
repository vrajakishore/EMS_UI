/**
 * Created by utanelan on 1/22/2016.
 */

routerApp.service('SearchService',function($http){
    return function(callback,url){
        
        $http.get(url).then(function (resp){
            /*console.log("JSON DATA")*/
            callback(resp.data);
        },function (resp) {
            callback([]);
        })
    }
});
