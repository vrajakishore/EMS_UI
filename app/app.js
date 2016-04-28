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
            templateUrl: 'pages/events/events.html'
        })

        .state('events.eventsCategory', {
            url: '/category',
            templateUrl: 'pages/events/eventsCategory.html'
        })
        .state('events.eventsVenue', {
            url: '/venue',
            templateUrl: 'pages/events/eventsVenue.html'
        })
        .state('events.eventsPerformer', {
            url: '/performer',
            templateUrl: 'pages/events/eventsPerformer.html'
        })
        .state('events.eventsOrganizer', {
            url: '/organizer',
            templateUrl: 'pages/events/eventsOrganizer.html'
        })


       

});

