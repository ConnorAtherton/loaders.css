'use strict';

angular.module('loaders-css', []).directive('loaderInner', [
    function () {
        return {
            restrict: 'C',
            scope: true,
            template: '<div ng-repeat="d in mkArray(divs) track by $index"></div>',
            link: function (scope, element) {
                scope.divs = 0;
                
                scope.mkArray = function (n) {
                    return new Array(n);
                };
                
                scope.$watch(function() {return element.attr('class'); }, function() {
                    if (element.hasClass('ball-pulse')) {scope.divs = 3;}
                    if (element.hasClass('ball-grid-pulse')) {scope.divs = 9;}
                    if (element.hasClass('ball-clip-rotate')) {scope.divs = 1;}
                    if (element.hasClass('ball-clip-rotate-pulse')) {scope.divs = 2;}
                    if (element.hasClass('square-spin')) {scope.divs = 1;}
                    if (element.hasClass('ball-clip-rotate-multiple')) {scope.divs = 2;}
                    if (element.hasClass('ball-pulse-rise')) {scope.divs = 5;}
                    if (element.hasClass('ball-rotate')) {scope.divs = 1;}
                    if (element.hasClass('cube-transition')) {scope.divs = 2;}
                    if (element.hasClass('ball-zig-zag')) {scope.divs = 2;}
                    if (element.hasClass('ball-zig-zag-deflect')) {scope.divs = 2;}
                    if (element.hasClass('ball-triangle-path')) {scope.divs = 3;}
                    if (element.hasClass('ball-scale')) {scope.divs = 1;}
                    if (element.hasClass('line-scale')) {scope.divs = 5;}
                    if (element.hasClass('line-scale-party')) {scope.divs = 4;}
                    if (element.hasClass('ball-scale-multiple')) {scope.divs = 3;}
                    if (element.hasClass('ball-pulse-sync')) {scope.divs = 3;}
                    if (element.hasClass('ball-beat')) {scope.divs = 3;}
                    if (element.hasClass('line-scale-pulse-out')) {scope.divs = 5;}
                    if (element.hasClass('line-scale-pulse-out-rapid')) {scope.divs = 5;}
                    if (element.hasClass('ball-scale-ripple')) {scope.divs = 1;}
                    if (element.hasClass('ball-scale-ripple-multiple')) {scope.divs = 3;}
                    if (element.hasClass('ball-spin-fade-loader')) {scope.divs = 8;}
                    if (element.hasClass('line-spin-fade-loader')) {scope.divs = 8;}
                    if (element.hasClass('triangle-skew-spin')) {scope.divs = 1;}
                    if (element.hasClass('pacman')) {scope.divs = 5;}
                    if (element.hasClass('ball-grid-beat')) {scope.divs = 9;}
                    if (element.hasClass('semi-circle-spin')) {scope.divs = 1;}
                });
            }
        };
    }
]);
