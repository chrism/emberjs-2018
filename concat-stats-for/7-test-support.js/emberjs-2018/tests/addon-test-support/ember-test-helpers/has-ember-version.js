define('emberjs-2018/tests/addon-test-support/ember-test-helpers/has-ember-version', [], function () {
  'use strict';

  define('ember-test-helpers/has-ember-version', ['exports', '@ember/test-helpers/has-ember-version'], function (exports, _hasEmberVersion) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, 'default', {
      enumerable: true,
      get: function get() {
        return _hasEmberVersion.default;
      }
    });
  });
});