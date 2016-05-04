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
            controller:'moviesEventsController'
        })

        .state('events.eventsStage', {
            url: '/stage',
            templateUrl: 'pages/events/eventsStage.html',
            controller:'stageEventsController'
        })

        .state('events.eventsMusic', {
            url: '/music',
            templateUrl: 'pages/events/eventsMusic.html',
            controller:'musicEventsController'
        })

        .state('events.eventsSports', {
            url: '/sports',
            templateUrl: 'pages/events/eventsSports.html',
            controller:'sportsEventsController'
        })

        .state('events.eventsSearch',{
            url:'/Search',
            templateUrl:'pages/events/search.html'
            //controller:'searchEventsController'
        })

        //nested view of search page in events

        .state('events.eventsSearch.popularity',{
            url:'/SearchbyPopularity',
            templateUrl:'pages/events/popularitySearch.html',
            controller:'searchByPopularityController'
        })

        .state('events.eventsSearch.certificate',{
            url:'/SearchByCertificate',
            templateUrl:'pages/events/certificateSearch.html',
            controller:'searchCertificateController'
        })

        .state('events.eventsSearch.venue',{
            url:'/SearchbyVenue',
            templateUrl:'pages/events/venueSearch.html',
            controller:'searchByVenueController'
        })

        .state('events.eventsSearch.performer',{
            url:'/SearchByPerformer',
            templateUrl:'pages/events/performerSearch.html',
            controller:'searchPerformerController'
        })


        /*.state('dash', {
            url: '/dash',
            templateUrl: 'pages/userdashboard.html'
        })*/

    // Dashboard STATES AND NESTED VIEWS ========================================

        .state('userDashboard', {
            url: '/userDashboard',
            templateUrl: 'pages/dashboard/user/userdashboard.html',
            controller:'userDashboardController'

        })

        .state('userDashboard.userAccountSetting', {
            url: '/userAccountSetting',
            templateUrl: 'pages/dashboard/user/userAccountSetting.html'
            //controller:'userAccountSettingsController'

        })

        .state('userDashboard.userUpcomingEvents', {
            url: '/userUpcomingEvents',
            templateUrl: 'pages/dashboard/user/userUpcomingEvents.html'
            //controller:'dashboardCtrl'

        })
       /* .state('userDashboard.userEventManagement', {
            url: '/userEventManagement',
            templateUrl: 'pages/dashboard/user/userEventManagement.html'
            //controller:'dashboardCtrl'

        })*/

        .state('userDashboard.userProfile', {
            url: '/userProfile',
            templateUrl: 'pages/dashboard/user/userProfile.html'
            //controller:'dashboardCtrl'

        })
        .state('userDashboard.userTransaction', {
            url: '/userTransaction',
            templateUrl: 'pages/dashboard/user/userTransactionHistory.html'
            //controller:'dashboardCtrl'

        })




        .state('adminDashboard',{
            url: '/adminDashboard',
            templateUrl: 'pages/dashboard/admin/adminDashboard.html'
            //controller:
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
    /*Organiser Dashboard
     */
        .state('organiserDashboard', {
            url: '/organiserDashboard',
            templateUrl: 'pages/dashboard/organiser/organiserdashboard.html',
            controller:'organiserDashboardController'

        })

        .state('organiserDashboard.organiserAccountSetting', {
            url: '/organiserAccountSetting',
            templateUrl: 'pages/dashboard/organiser/organiserAccountSetting.html'
            //controller:'userAccountSettingsController'

        })

        .state('organiserDashboard.organiserUpcomingEvents', {
            url: '/organiserUpcomingEvents',
            templateUrl: 'pages/dashboard/organiser/organiserUpcomingEvents.html'
            //controller:'dashboardCtrl'

        })
        .state('organiserDashboard.organiserEventManagement', {
         url: '/organiserEventManagement',
         templateUrl: 'pages/dashboard/organiser/organiserEventManagement.html'
         //controller:'dashboardCtrl'

         })

        .state('organiserDashboard.organiserProfile', {
            url: '/organiserProfile',
            templateUrl: 'pages/dashboard/organiser/organiserProfile.html'
            //controller:'dashboardCtrl'

        })
        .state('organiserDashboard.organiserTransaction', {
            url: '/organiserTransaction',
            templateUrl: 'pages/dashboard/organiser/organiserTransactionHistory.html'
            //controller:'dashboardCtrl'

        })

});

