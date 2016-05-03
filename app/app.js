/**
 * Created by vraja on 4/16/2016.
 */

var routerApp = angular.module('routerApp',['ui.router','ngAnimate','ui.bootstrap']);

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
  /*          params: {myParam: null},*/
            controller:'eventsCtrl'
        })

        .state('events.eventDetails', {
            url: '/eventsDetails',
            params:{myParam: null},            //EVENT_ID is the parameter
            templateUrl: 'pages/events/eventDetails.html',
            controller:'eventDetailsController'

        })

        .state('events.bookNow',{
            url : '/bookNow',
            templateUrl : 'pages/events/bookingPage.html',
            controller : 'BookingPageController'
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
        .state('events.eventsSearch',{
            url:'/Search',
            templateUrl:'pages/events/search.html'
        })

        /*.state('dash', {
            url: '/dash',
            templateUrl: 'pages/userdashboard.html'
        })*/

    // Dashboard STATES AND NESTED VIEWS ========================================

        .state('userDashboard', {
            url: '/userDashboard',
            templateUrl: 'pages/dashboard/user/userdashboard.html'
            //controller:'dashboardCtrl'

        })

        .state('userDashboard.userAccountSetting', {
            url: '/userAccountSetting',
            templateUrl: 'pages/dashboard/user/userAccountSetting.html',
           controller:'AccountSettingsController'

        })

        .state('userDashboard.userUpcomingEvents', {
            url: '/userUpcomingEvents',
            templateUrl: 'pages/dashboard/user/userUpcomingEvents.html'
            //controller:'dashboardCtrl'

        })
        .state('userDashboard.eventManagement', {
            url: '/eventManagement',
            templateUrl: 'pages/dashboard/user/eventManagement.html'
            //controller:'dashboardCtrl'

        })


        .state('adminDashboard',{
            url: '/adminDashboard',
            templateUrl: 'pages/dashboard/admin/adminDashboard.html'
        })


        .state('adminDashboard.adminAccountSetting',{
            url: '/adminAccountSetting',
            templateUrl: 'pages/dashboard/admin/adminAccountSetting.html'
        })
        .state('adminDashboard.eventRequest',{
            url: '/eventRequest',
            templateUrl: 'pages/dashboard/admin/eventRequest.html'
        })

        .state('feedback',{
        url: '/feedback',
        templateUrl:'pages/feedback.html'

    })

});

