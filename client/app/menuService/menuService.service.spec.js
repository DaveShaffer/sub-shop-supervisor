'use strict';

describe('Service: menuService', function () {

  // load the service's module
  beforeEach(module('1vSubShopApp.menuService'));

  // instantiate service
  var menuService;
  beforeEach(inject(function (_menuService_) {
    menuService = _menuService_;
  }));

  it('should do something', function () {
    expect(!!menuService).to.be.true;
  });

});
