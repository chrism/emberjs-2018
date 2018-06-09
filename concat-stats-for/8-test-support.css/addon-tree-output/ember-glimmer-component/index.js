define('ember-glimmer-component/index', ['exports', 'ember-glimmer-component/components/glimmer-component', 'ember-glimmer-component/components/glimmer-component-compat'], function (exports, _glimmerComponent, _glimmerComponentCompat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Component', {
    enumerable: true,
    get: function () {
      return _glimmerComponent.default;
    }
  });
  Object.defineProperty(exports, 'CompatComponent', {
    enumerable: true,
    get: function () {
      return _glimmerComponentCompat.default;
    }
  });
});