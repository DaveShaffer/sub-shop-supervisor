'use strict';

angular.module('1vSubShopApp')
  .filter('menuFilter', function() {
    function isMatch(str, pattern) {
      return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
    }

    return function(inventory, searchText) {
      var menus = {
        searchText: searchText,
        out: []
      };
      angular.forEach(inventory, function (menu) {
        if (isMatch(menu.name       , this.searchText) ) {
          this.out.push(menu);
        }
      }, menus);
      return menus.out;
    };
  });

// 'use strict';

// angular.module('1vSubShopApp')
//   .filter('menuFilter', function () {
//     return function (input) {
//       return 'menuFilter filter: ' + input;
//     };
//   });
