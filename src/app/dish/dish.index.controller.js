(function() {
  'use strict';

  angular
    .module('1vSubShop')
    .controller('DishIndexController', DishIndexController);

  /** @ngInject */
  function DishIndexController(DishService, $state, OrderService) {
    var vm = this;

    vm.searchText = '';
    vm.inventory = DishService.inventory;
    vm.order = OrderService.order;

    vm.addDish = function(dish) {
      OrderService.addDish(dish);
      dish.qty -= 1;
    };

    vm.removeDish = function(dish) {
      OrderService.removeDish(dish);
      DishService.addOneToQuantity(dish);
    };

    vm.getCost = function(dish) {
      return OrderService.getCost(dish);
    };

    vm.getTotal = function() {
      return OrderService.getTotal();
    };

    vm.clearOrder = function(order) {
      var x = vm.order;
      DishService.resetQuantity(x);
      OrderService.clearOrder();
      // console.log(vm.order, '1');
    };

    vm.goDish = function (dish) {
      // console.log('goDish: ' + dish.id);
      $state.go( 'dishDetail', { dishId : dish.id } );
    };
  }

  angular
    .module('1vSubShop')
    .filter('inventory', function() {

    function isMatch(str, pattern) {
      return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
    }

    return function(inventory, searchText) {
      var dishes = {
          searchText: searchText,
          out: []
      };
      angular.forEach(inventory, function (dish) {
        if (isMatch(dish.name, this.searchText) ) {
          this.out.push(dish);
        }
      }, dishes);
      return dishes.out;
    };
  });
})();
