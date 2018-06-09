define('emberjs-2018/tests/addon-test-support/@ember/test-helpers/global', [], function () {
  'use strict';

  define('@ember/test-helpers/global', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.default = function () {
      if (typeof self !== 'undefined') {
        return self;
      } else if (typeof window !== 'undefined') {
        return window;
      } else if (typeof global !== 'undefined') {
        return global;
      } else {
        return Function('return this')();
      }
    }();
  });
});