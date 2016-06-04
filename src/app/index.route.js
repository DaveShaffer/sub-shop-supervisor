(function() {
  'use strict';

  angular
    .module('1vSubShop')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('dishes', {
        url: '/dishes',
        templateUrl: 'app/dish/index.html',
        controller: 'DishIndexController',
        controllerAs: 'ctrl'
      })
      .state('dishDetail', {
        url: '/dishes/:dishId',
        templateUrl: 'app/dish/show.html',
        controller: 'DishShowController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
