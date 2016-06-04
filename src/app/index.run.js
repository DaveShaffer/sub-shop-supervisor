(function() {
  'use strict';

  angular
    .module('1vSubShop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
