'use strict';

angular.module('1vSubShopApp', [
                '1vSubShopApp.constants',
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'btford.socket-io',
                'ui.router',
                'ui.bootstrap',
                'ngAnimate'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
