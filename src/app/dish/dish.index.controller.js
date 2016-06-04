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
