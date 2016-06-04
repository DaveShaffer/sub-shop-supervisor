(function() {
  'use strict';

  angular.module('1vSubShop')
    .service('OrderService', function() {

    var vm = this;

    vm.order = [];

    function findItemById(dishes, id) {
      return _.find(dishes, function(dish) {
        return dish.id === id;
      });
    }

    vm.addDish = function(dish) {
      var found = findItemById(vm.order, dish.id);
      if (found) {
        found.quantity += dish.quantity;
      }
      else {
        vm.order.push(angular.copy(dish));
      }
    };

    vm.removeDish = function(dish) {
      var index = vm.order.indexOf(dish);
      vm.order.splice(index, 1);
    };

    vm.getCost = function(dish) {
      return dish.quantity * dish.price;
    };

    vm.getTotal = function() {
      return _.reduce(vm.order, function(sum, dish) {
        return (sum + vm.getCost(dish));
      }, 0);
    };

    vm.clearOrder = function() {
      vm.order.length = 0;
    };
  });
})();
