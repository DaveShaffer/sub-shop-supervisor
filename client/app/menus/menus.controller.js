'use strict';
(function(){

class MenusComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular
  .module('1vSubShopApp')
  .component('menus', {
    templateUrl: 'app/menus/menus.html',
    controller: MenusComponent
  });

})();
