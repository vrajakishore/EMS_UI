/**
 * Created by vraja on 4/16/2016.
 */

var routerApp = angular.module('routerApp',['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/create');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html'
        })

        .state('events', {
            url: '/events',
            templateUrl: 'pages/events.html'
        })


       

});

