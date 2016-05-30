(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('APP_MEDIAQUERY', {
            'desktopLG':             1200,
            'desktop':                992,
            'tablet':                 768,
            'mobile':                 480
        })
    ;

    angular.module('app.core').constant('APP_SERVER', {
        envs: {
            dev: {
                url: 'http://localhost:8000'
            },
            test: {
                url: 'http://test.martinasweetcrafts.com'
            },
            prod: {
                url: 'http://api.martinasweetcrafts.com'
            }
        }
    });
})();