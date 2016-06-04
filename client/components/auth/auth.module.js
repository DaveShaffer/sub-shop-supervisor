'use strict';

angular.module('1vSubShopApp.auth', ['1vSubShopApp.constants', '1vSubShopApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
