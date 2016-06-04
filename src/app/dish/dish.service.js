(function() {
  'use strict';

  angular
    .module('1vSubShop')
    .service('DishService', DishService);

  /** @ngInject */
  function DishService() {

    var that = this;

    that.findItemById = function(id) {
      var itemId = parseInt(id);
      return _.find(that.inventory, function(item) {
        return item.id === parseInt(itemId);
      });
    };

    // TODO: eventually we want to fetch the inventory from the server.
    that.inventory = [
      {
        id: 1,
        name: 'Cheese Burger',
        price: 3.50,
        qty: 50,
        made: 1/1/2000,
        age: 0,
        shelfLife: 7
      },
      {
        id: 2,
        name: 'Chips',
        price: 1.00,
        qty: 100,
        made: 1/1/2000,
        age: 0,
        shelfLife: 365
      },
      {
        id: 3,
        name: 'Pepsi',
        price: 2.50,
        qty: 1000,
        made: 1/1/2000,
        age: 0,
        shelfLife: 700
      }
    ];
  }
})();
