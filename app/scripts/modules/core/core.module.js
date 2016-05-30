/**
 * Created by rjuliani on 5/28/16.
 */
(function(){
    'use strict';

    angular.module('app.core', [
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngSanitize',
        'ngTouch',
        'ngStorage',
        'ui.bootstrap',
        'ui.router',
        'oc.lazyLoad',
        'cfp.loadingBar',
        'angular-loading-bar',
        'ngDialog',
        'app-templates',
        'app.core.base',
        'app.core.lazyload',
        'app.core.loadingbar',
        'app.core.notify',
        'app.core.preloader',
        'app.core.routes',
        'app.core.uploader',
        'app.core.settings'

    ]);
})();
