define('emberjs-2018/tests/addon-test-support/ember-cli-qunit', [], function () {
  'use strict';

  define('ember-cli-qunit', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, 'TestLoader', {
      enumerable: true,
      get: function get() {
        return _emberQunit.TestLoader;
      }
    });
    Object.defineProperty(exports, 'setupTestContainer', {
      enumerable: true,
      get: function get() {
        return _emberQunit.setupTestContainer;
      }
    });
    Object.defineProperty(exports, 'loadTests', {
      enumerable: true,
      get: function get() {
        return _emberQunit.loadTests;
      }
    });
    Object.defineProperty(exports, 'startTests', {
      enumerable: true,
      get: function get() {
        return _emberQunit.startTests;
      }
    });
    Object.defineProperty(exports, 'setupTestAdapter', {
      enumerable: true,
      get: function get() {
        return _emberQunit.setupTestAdapter;
      }
    });
    Object.defineProperty(exports, 'start', {
      enumerable: true,
      get: function get() {
        return _emberQunit.start;
      }
    });
  });
});