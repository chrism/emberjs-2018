define('emberjs-2018/src/resolver', ['exports', 'ember-resolver/resolvers/fallback', 'ember-resolver/ember-config', 'emberjs-2018/config/environment'], function (exports, _fallback, _emberConfig, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var moduleConfig = (0, _emberConfig.default)(_environment.default.modulePrefix);
  /*
   * If your application has custom types and collections, modify moduleConfig here
   * to add support for them.
   */

  exports.default = _fallback.default.extend({
    config: moduleConfig
  });
});