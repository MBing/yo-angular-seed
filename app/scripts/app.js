'use strict';

angular.module('yoAngularSeedApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/view1', {
        templateUrl: 'views/partial1.html',
        controller: 'ViewCtrl1'
      })
      .when('/view2', {
        templateUrl: 'views/partial2.html',
        controller: 'ViewCtrl1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
