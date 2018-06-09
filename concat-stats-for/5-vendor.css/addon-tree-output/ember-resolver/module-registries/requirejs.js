define('ember-resolver/module-registries/requirejs', ['exports', '@glimmer/di'], function (exports, _di) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var RequireJSRegistry = function () {
    function RequireJSRegistry(config, modulePrefix) {
      var require = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : self.requirejs;

      _classCallCheck(this, RequireJSRegistry);

      this._config = config;
      this._modulePrefix = modulePrefix;
      this._require = require;
    }

    RequireJSRegistry.prototype._baseSegments = function _baseSegments(s) {
      var collectionDefinition = this._config.collections[s.collection];
      var group = collectionDefinition && collectionDefinition.group;
      var segments = [s.rootName, this._modulePrefix];

      if (group) {
        segments.push(group);
      }

      // Special case to handle definitiveCollection for templates
      // eventually want to find a better way to address.
      // Dgeb wants to find a better way to handle these
      // in config without needing definitiveCollection.
      var ignoreCollection = s.type === 'template' && s.collection === 'routes' && s.namespace === 'components';

      if (s.collection !== 'main' && !ignoreCollection) {
        segments.push(s.collection);
      }

      if (s.namespace) {
        segments.push(s.namespace);
      }

      if (s.name !== 'main' || s.collection !== 'main') {
        segments.push(s.name);
      }

      return segments;
    };

    RequireJSRegistry.prototype._detectModule = function _detectModule(specifier, lookupDefault, lookupNamed) {
      var segments = this._baseSegments(specifier);
      var basePath = '' + segments.join('/');
      var typedPath = basePath + '/' + specifier.type;

      var lookupResult = lookupDefault(typedPath);

      if (!lookupResult) {
        if (this._checkDefaultType(specifier)) {
          lookupResult = lookupDefault(basePath);
        } else {
          lookupResult = lookupNamed(basePath);
        }
      }

      return lookupResult;
    };

    RequireJSRegistry.prototype._checkDefaultType = function _checkDefaultType(specifier) {
      var defaultType = this._config.collections[specifier.collection].defaultType;

      return defaultType && defaultType === specifier.type;
    };

    RequireJSRegistry.prototype.has = function has(specifierString) {
      var _this = this;

      var specifier = (0, _di.deserializeSpecifier)(specifierString);

      /* return a boolean */
      return this._detectModule(specifier, function (path) {
        return path in _this._require.entries;
      }, function (path) {
        if (path in _this._require.entries) {
          var result = _this._require(path);
          return specifier.type in result;
        }
      });
    };

    RequireJSRegistry.prototype.get = function get(specifierString) {
      var _this2 = this;

      var specifier = (0, _di.deserializeSpecifier)(specifierString);

      var useDefaultType = this._checkDefaultType(specifier);

      /* return an export */
      var moduleExport = this._detectModule(specifier, function (path) {
        return path in _this2._require.entries && _this2._require(path).default;
      }, function (path) {
        return path in _this2._require.entries && _this2._require(path)[specifier.type];
      });

      return moduleExport;
    };

    return RequireJSRegistry;
  }();

  exports.default = RequireJSRegistry;
});