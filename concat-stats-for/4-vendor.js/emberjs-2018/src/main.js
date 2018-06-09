define("emberjs-2018/src/main", ["exports", "emberjs-2018/src/resolver", "ember-load-initializers", "emberjs-2018/config/environment"], function (exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix + "/src/init");

  /*
   * This line is added to support initializers in the `app/` directory
   */
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});