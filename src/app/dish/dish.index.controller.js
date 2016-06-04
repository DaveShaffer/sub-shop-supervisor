(function() {
  'use strict';

  angular
    .module('1vSubShop')
    .controller('DishIndexController', DishIndexController);

  /** @ngInject */
  function DishIndexController(DishService, $state) {
    var vm = this;

    vm.inventory = DishService.inventory;

    vm.goDish = function (dish) {
      $state.go( 'dishDetail', { dishId : dish.id } );
    };
  }
})();
