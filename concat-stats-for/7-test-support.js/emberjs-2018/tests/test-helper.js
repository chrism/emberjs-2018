define('emberjs-2018/tests/test-helper', ['emberjs-2018/src/main', '@ember/test-helpers', 'ember-qunit'], function (_main, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_main.default.create({ autoboot: false }));

  (0, _emberQunit.start)();
});