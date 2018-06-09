define('@glimmer/di/index', ['exports', '@glimmer/di/container', '@glimmer/di/registry', '@glimmer/di/owner', '@glimmer/di/specifier'], function (exports, _container, _registry, _owner, _specifier) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Container', {
    enumerable: true,
    get: function () {
      return _container.default;
    }
  });
  Object.defineProperty(exports, 'Registry', {
    enumerable: true,
    get: function () {
      return _registry.default;
    }
  });
  Object.defineProperty(exports, 'getOwner', {
    enumerable: true,
    get: function () {
      return _owner.getOwner;
    }
  });
  Object.defineProperty(exports, 'setOwner', {
    enumerable: true,
    get: function () {
      return _owner.setOwner;
    }
  });
  Object.defineProperty(exports, 'OWNER', {
    enumerable: true,
    get: function () {
      return _owner.OWNER;
    }
  });
  Object.defineProperty(exports, 'isSpecifierStringAbsolute', {
    enumerable: true,
    get: function () {
      return _specifier.isSpecifierStringAbsolute;
    }
  });
  Object.defineProperty(exports, 'isSpecifierObjectAbsolute', {
    enumerable: true,
    get: function () {
      return _specifier.isSpecifierObjectAbsolute;
    }
  });
  Object.defineProperty(exports, 'serializeSpecifier', {
    enumerable: true,
    get: function () {
      return _specifier.serializeSpecifier;
    }
  });
  Object.defineProperty(exports, 'deserializeSpecifier', {
    enumerable: true,
    get: function () {
      return _specifier.deserializeSpecifier;
    }
  });
});