(function () {
    'use strict';

    angular
        .module('app.core.settings')
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope'];

    function settingsRun($rootScope){

        
        $rootScope.app = {
            name: 'Martina\'s Sweet Crafts',
            description: 'Las más dulces tentaciones',
            year: ((new Date()).getFullYear()),
            viewAnimation: 'ng-fadeInUp'
        };

    }
})();