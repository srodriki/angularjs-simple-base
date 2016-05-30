/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.core.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){
        
        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(true);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/');

        /**
         * Home and registration-related routes
         */
        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'core/base/views/base.tpl.html'/*,
                resolve: helper.resolveFor('moment', 'fastclick')*/
            })
            .state('app.home', {
                url: '/',
                templateUrl: 'home/views/home.tpl.html'
            }).state('app.login', {
                url: '/account/login/?next',
                title: 'Inicia Sesión',
                templateUrl: 'appanon/account/login.tpl.html',
                controller: 'LoginController',
                controllerAs: 'controller'
            }).state('app.signup', {
                url: '/account/signup/?referrer',
                title: 'Regístrate',
                templateUrl: 'appanon/account/signup.tpl.html',
                controller: 'SignupController',
                controllerAs: 'controller'
            }).state('app.forgotpassword', {
                url: '/account/forgot-password/',
                title: 'Recupera tu contraseña',
                templateUrl: 'appanon/account/forgot-password.tpl.html',
                controller: 'PasswordResetController',
                controllerAs: 'controller'
            }).state('app.setpassword', {
                url: '/account/set-password/?key&uidb36',
                title: 'Establece tu nueva contraseña',
                templateUrl: 'appanon/account/set-password.tpl.html',
                controller: 'SetPasswordController',
                controllerAs: 'controller'
            }).state('app.confirmEmail', {
                url: '/account/confirm-email/',
                title: 'Confirma tu email',
                templateUrl: 'appanon/account/confirm-email.tpl.html'
            }).state('app.verifyEmail', {
                url: '/account/verify-email/:key/',
                title: 'Verifica tu email',
                templateUrl: 'appanon/account/verify-email.tpl.html',
                controller: 'VerifyEmailController',
                controllerAs: 'controller'
            });




    } // routesConfig

})();

