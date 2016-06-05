'use strict';

describe('Service: orderService', function () {

  // load the service's module
  beforeEach(module('1vSubShopApp.orderService'));

  // instantiate service
  var orderService;
  beforeEach(inject(function (_orderService_) {
    orderService = _orderService_;
  }));

  it('should do something', function () {
    expect(!!orderService).to.be.true;
  });

});
