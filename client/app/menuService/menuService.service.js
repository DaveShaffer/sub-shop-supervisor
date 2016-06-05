'use strict';

angular
  .module('1vSubShopApp')
  .service('menuService', function($http) {

    var svc = this;

    svc.findItemById = function(id) {
      return $http.get('/api/menus/' + id);
    };

    svc.getMenus = function() {
      return $http.get('/api/menus');
   };
  });

// 'use strict';

// angular.module('1vSubShopApp.menuService')
//   .service('menuService', function () {
//     // AngularJS will instantiate a singleton by calling "new" on this function
//   });
