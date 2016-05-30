(function () {
    'use strict';

    angular.module('app.core.base').directive('navbar', NavbarDirective);

    function NavbarDirective() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'core/base/directives/navbar/navbar.tpl.html',
            scope: {}

        };
    }
})();