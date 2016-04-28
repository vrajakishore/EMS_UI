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

    // EVENT STATES AND NESTED VIEWS ========================================
        .state('events', {
            url: '/events',
            templateUrl: 'pages/events/events.html',
            controller:'events'
        })

        .state('events.eventsMovies', {
            url: '/movies',
            templateUrl: 'pages/events/eventsMovies.html',
            controller:'jaffa'

        })
        .state('events.eventsStage', {
            url: '/stage',
            templateUrl: 'pages/events/eventsStage.html'

        })
        .state('events.eventsMusic', {
            url: '/music',
            templateUrl: 'pages/events/eventsMusic.html'
        })
        .state('events.eventsSports', {
            url: '/sports',
            templateUrl: 'pages/events/eventsSports.html'
        })

        /*.state('dash', {
            url: '/dash',
            templateUrl: 'pages/userdashboard.html'
        })*/

       

});

