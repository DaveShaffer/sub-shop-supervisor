'use strict';

angular.module('1vSubShopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menus', {
        url: '/menus',
        template: '<menus></menus>'
      });
  });
