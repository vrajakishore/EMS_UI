/**
 * Created by utanelan on 1/22/2016.
 */

routerApp.service('SearchService',function($http){
    return function(callback,url){
        /*console.log(url)*/
        /*console.log(searchInput + "*******");*/
        $http.get(url).then(function (resp){
            /*console.log("JSON DATA")*/
            callback(resp.data);
        },function (resp) {
            callback([]);
        })
    }
});
