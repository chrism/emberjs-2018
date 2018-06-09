define('emberjs-2018/tests/addon-test-support/ember-qunit/legacy-2-x/module-for', [], function () {
  'use strict';

  define('ember-qunit/legacy-2-x/module-for', ['exports', 'ember-qunit/legacy-2-x/qunit-module', 'ember-test-helpers'], function (exports, _qunitModule, _emberTestHelpers) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = moduleFor;
    function moduleFor(name, description, callbacks) {
      (0, _qunitModule.createModule)(_emberTestHelpers.TestModule, name, description, callbacks);
    }
  });
});