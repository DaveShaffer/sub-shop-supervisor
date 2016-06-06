(function() {
  'use strict';

  angular
    .module('1vSubShop')
    .controller('DishShowController', DishShowController);

  /** @ngInject */
  function DishShowController(DishService, $stateParams) {
    var vm = this;
    var id = $stateParams.dishId;
    vm.dish = DishService.findItemById(id);
  }
})();
