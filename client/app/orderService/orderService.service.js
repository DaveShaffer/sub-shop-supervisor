'use strict';

angular
  .module('1vSubShopApp')
  .service('orderService', function ($http) {

    var that = this;

    that.getOrder = function() {
      // var userId = Auth.getCurrentUser()._id;
      return $http.get('/order/');
    };

    that.addItem = function(item) {
      // var userId = Auth.getCurrentUser()._id;
      return $http.post('/order/' + item._id);
    };

    that.removeItem = function(orderItem) {
      // var userId = Auth.getCurrentUser()._id;
      return $http.delete('/order/' + orderItem._id);
    };

    that.getCost = function(orderItem) {
      return orderItem.qty * orderItem.menu.price;
    };

    that.getTotal = function(order) {
      var total = _.reduce(order, function(sum, orderItem) {
        return sum + that.getCost(orderItem);
      }, 0);
      return total;
    };

    that.clearOrder = function() {
      // var userId = Auth.getCurrentUser()._id;
      return $http.delete('/order/');
    };
  });

// 'use strict';

// angular.module('1vSubShopApp.orderService')
//   .service('orderService', function () {
//     // AngularJS will instantiate a singleton by calling "new" on this function
//   });
