define('emberjs-2018/tests/addon-test-support/@ember/test-helpers/has-ember-version', [], function () {
  'use strict';

  define('@ember/test-helpers/has-ember-version', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = hasEmberVersion;

    /**
      Checks if the currently running Ember version is greater than or equal to the
      specified major and minor version numbers.
    
      @private
      @param {number} major the major version number to compare
      @param {number} minor the minor version number to compare
      @returns {boolean} true if the Ember version is >= MAJOR.MINOR specified, false otherwise
    */
    function hasEmberVersion(major, minor) {
      var numbers = Ember.VERSION.split('-')[0].split('.');
      var actualMajor = parseInt(numbers[0], 10);
      var actualMinor = parseInt(numbers[1], 10);
      return actualMajor > major || actualMajor === major && actualMinor >= minor;
    }
  });
});