define('ember-resolver/resolvers/fallback/index', ['exports', 'ember-resolver', 'ember-resolver/resolvers/glimmer-wrapper'], function (exports, _emberResolver, _glimmerWrapper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _glimmerWrapper.default.extend({
    init: function init(options) {
      this._super(options);
      this._fallback = _emberResolver.default.create(Ember.assign({
        namespace: { modulePrefix: this.config.app.name }
      }, options));
    },
    resolve: function resolve(name) {
      var result = this._super(name);
      return result || this._fallback.resolve(this._fallback.normalize(name));
    }
  });
});