(function () {
    'use strict';

    angular.module('app.core.uploader').controller('UploaderController', UploaderController);

    UploaderController.$inject = ['$scope', '$cookies', 'FileUploader', 'Notify'];

    function UploaderController($scope, $cookies, FileUploader, Notify) {
        console.log($scope.url);
        var uploader = $scope.uploader = new FileUploader({
            url: $scope.url,
            method: 'PUT',
            removeAfterUpload: false,
            headers: {
                'X-CSRFToken': $cookies.get('csrftoken')
            }
        });

        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|pdf|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
            if ($scope.uploadedFiles) {
                $scope.uploadedFiles.push(fileItem.url);
            }
            Notify.alert('¡Documento recibido correctamente!', {status: 'success'});
        };

        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
            Notify.alert('Ocurrió un problema al subir ' + fileItem.file.name);
        };
    }

    angular.module('app.core.uploader').directive('uploader', UploaderDirective);

    function UploaderDirective() {
        return {
            restrict: 'E',
            replace: 'true',
            scope: {
                url: '=',
                uploadedFiles: '=?'
            },
            controller: 'UploaderController',
            controllerAs: 'controller',
            templateUrl: 'directives/uploader/uploader.directive.tpl.html'
        };
    }

    angular.module('app.core.uploader').directive('uploaderQueue', UploaderQueueDirective);

    function UploaderQueueDirective(){
        return {
            restrict: 'E',
            replace: 'true',
            scope: {},
            transclude: 'true',
            template: '<md-list><ng-transclude></ng-transclude></md-list>'
        };
    }

    angular.module('app.core.uploader').directive('uploaderQueueItemStatus', UploaderQueueItemStatusDirective);

    function UploaderQueueItemStatusDirective() {
        var templateString = '\
            <div class="text-center">\
                <span ng-if="item.isSuccess">\
                    <em class="fa fa-check fa-fw text-success"></em>\
                </span>\
                <span ng-if="item.isCancel">\
                    <em class="fa fa-ban-circle fa-fw text-warning"></em>\
                </span>\
                <span ng-if="item.isError">\
                    <em class="fa fa-times fa-fw text-danger"></em>\
                </span>\
            </div>';
        return {
            restrict: 'E',
            replace: 'true',
            template: templateString
        };
    }

    angular.module('app.core.uploader').directive('uploaderQueueItem', UploaderQueueItemDirective);

    function UploaderQueueItemDirective() {
        var templateString = '\
            <md-list-item layout="row">\
                <span flex="40" class="text-bold">{{ item.file.name }}</span>\
                <md-progress-linear flex="20" md-mode="determinate" value="{{ item.progress }}"></md-progress-linear>\
                <uploader-queue-item-status flex="10"></uploader-queue-item-status>\
                <div flex="15">\
                    <button type="button" ng-click="item.cancel()" ng-disabled="!item.isUploading" class="btn btn-warning btn-xs">\
                        <span class="icon-close mr"></span><span translate>Cancelar</span>\
                    </button>\
                </div>\
                <div flex="15" flex-offset="5">\
                    <button type="button" ng-click="item.remove()" ng-disabled="item.isUploading" class="btn btn-danger btn-xs" >\
                        <span class="icon-trash mr"></span><span translate>Remover</span>\
                    </button>\
                </div>\
            </md-list-item>';
        return {
            restrict: 'E',
            replace: 'true',
            scope: {
                item: '='
            },
            template: templateString

        };
    }
})();