define('@glimmer/resolver/index', ['exports', '@glimmer/resolver/resolver', '@glimmer/resolver/module-registries/basic-registry'], function (exports, _resolver, _basicRegistry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _resolver.default;
    }
  });
  Object.defineProperty(exports, 'BasicModuleRegistry', {
    enumerable: true,
    get: function () {
      return _basicRegistry.default;
    }
  });
});