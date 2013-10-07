'use strict';

/* App Module */

angular.module('graduation-album', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/graduates', {templateUrl: '/desktop.bundles/graduates/graduates.html',   controller: PagesCtrl}).
      when('/lecturers', {templateUrl: '/desktop.bundles/lecturers/lecturers.html',   controller: PagesCtrl}).
      when('/graduates/:id', {templateUrl: 'partials/phone-detail.html', controller: PagesCtrl});
}]);
