define('ember-glimmer-component/components/glimmer-component-compat', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember._setComponentManager(Ember.Component.extend({}), 'glimmer');
});