(function() {
  'use strict';

  angular
    .module('1vSubShop')
    .service('DishService', DishService);

  /** @ngInject */
  function DishService() {

    var that = this;

    that.resetQuantity = function(order) {
      // _.each(that.inventory, function(dish) {
      // dish.qty = 3;
      // });
      _.each(order, function(dish) {
        var item = that.findItemById(dish.id);
        item.qty += dish.quantity;
        console.log(order, dish, item);
      });
    }

    that.addOneToQuantity = function(dish) {
      var dish = that.findItemById(dish.id);
      dish.qty += 1;
    }

    that.findItemById = function(id) {
      var dishId = parseInt(id);
      return _.find(that.inventory, function(dish) {
        return dish.id === parseInt(dishId);
      });
    };

    // TODO: eventually we want to fetch the inventory from the server.
    that.inventory = [
      {
        id: 1,
        name: 'Cheese Burger',
        price: 3.50,
        serving: 1,
        quantity: 1,
        qty: 50,
        made: '6 Jun 2016',
        age: 0,
        shelfLife: 7
      },
      {
        id: 2,
        name: 'Chips',
        price: 1.00,
        serving: 1,
        quantity: 1,
        qty: 100,
        made: '6 Jun 2016',
        age: 0,
        shelfLife: 365
      },
      {
        id: 3,
        name: 'Pepsi',
        price: 2.50,
        serving: 1,
        quantity: 1,
        qty: 1000,
        made: '6 Jun 2016',
        age: 0,
        shelfLife: 700
      }
    ];
  }
})();
