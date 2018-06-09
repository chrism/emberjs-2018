define('emberjs-2018/tests/addon-test-support/@ember/test-helpers/teardown-application-context', [], function () {
  'use strict';

  define('@ember/test-helpers/teardown-application-context', ['exports', '@ember/test-helpers/settled'], function (exports, _settled) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.default = function () {
      return (0, _settled.default)();
    };
  });
});