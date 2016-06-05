'use strict';

describe('Component: MenusComponent', function () {

  // load the controller's module
  beforeEach(module('1vSubShopApp'));

  var MenusComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MenusComponent = $componentController('MenusComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
