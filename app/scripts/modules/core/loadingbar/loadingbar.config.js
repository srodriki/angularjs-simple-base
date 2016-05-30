(function() {
    'use strict';

    angular
        .module('app.core.loadingbar')
        .config(loadingbarConfig)
        ;
    loadingbarConfig.$inject = ['cfpLoadingBarProvider'];
    function loadingbarConfig(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeBar = true;
      //cfpLoadingBarProvider.includeSpinner = false;
      //cfpLoadingBarProvider.latencyThreshold = 1000;
      cfpLoadingBarProvider.parentSelector = '.wrapper > header';
        /*cfpLoadingBarProvider.spinnerTemplate = '\
        <div flex="100" class="whirl traditional"></div>';*/
    }
})();