define('ember-resolver/resolvers/glimmer-wrapper/index', ['exports', '@glimmer/resolver/resolver', 'ember-resolver/module-registries/requirejs'], function (exports, _resolver, _requirejs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DefaultResolver = Ember.DefaultResolver,
      dasherize = Ember.String.dasherize;


  function slasherize(dotted) {
    return dotted.replace(/\./g, '/');
  }

  var TEMPLATE_TO_PARTIAL = /^template:(.*\/)?_([\w-]+)/;

  function isAbsoluteSpecifier(specifier) {
    return specifier.indexOf(':/') !== -1;
  }

  function cleanupEmberSpecifier(specifier, source, _namespace) {
    var _specifier$split = specifier.split(':'),
        type = _specifier$split[0],
        name = _specifier$split[1];

    if (!name) {
      return [specifier, null];
    }

    if (type === 'component' && name) {
      specifier = type + ':' + name;
    } else if (type === 'service') {
      /* Services may be camelCased */
      specifier = 'service:' + dasherize(name);
    } else if (type === 'route') {
      /* Routes may have.dot.paths */
      specifier = 'route:' + slasherize(name);
    } else if (type === 'controller') {
      /* Controllers may have.dot.paths */
      specifier = 'controller:' + slasherize(name);
    } else if (type === 'template') {
      if (name && name.indexOf('components/') === 0) {
        var sliced = name.slice(11);
        specifier = 'template:' + sliced;
      } else {
        /*
         * Ember partials are looked up as templates. Here we replace the template
         * resolution with a partial resolute when appropriate. Try to keep this
         * code as "pay-go" as possible.
         */
        var match = TEMPLATE_TO_PARTIAL.exec(specifier);
        if (match) {
          var namespace = match[1] || '';
          var _name = match[2];

          specifier = 'partial:' + namespace + _name;
        } else {
          if (source) {
            throw new Error('Cannot look up a route template ' + specifier + ' with a source');
          }
          /*
           * Templates for routes must be looked up with a source. They may
           * have dots.in.paths
           */
          specifier = 'template';
          source = 'route:/' + _namespace + '/routes/' + slasherize(name);
        }
      }
    }

    return [specifier, source];
  }

  /*
   * Wrap the @glimmer/resolver in Ember's resolver API. Although
   * this code extends from the DefaultResolver, it should never
   * call `_super` or call into that code.
   */
  var Resolver = DefaultResolver.extend({
    init: function init() {
      this._super.apply(this, arguments);

      this._configRootName = this.config.app.rootName || 'app';

      if (!this.glimmerModuleRegistry) {
        this.glimmerModuleRegistry = new _requirejs.default(this.config, 'src');
      }

      this._glimmerResolver = new _resolver.default(this.config, this.glimmerModuleRegistry);
    },


    normalize: null,

    expandLocalLookup: function expandLocalLookup(specifier, source, namespace) {
      if (isAbsoluteSpecifier(specifier)) {
        return specifier; // specifier is absolute
      }

      if (source || namespace) {
        var rootName = namespace || this._configRootName;

        var _specifier$split2 = specifier.split(':'),
            type = _specifier$split2[0],
            name = _specifier$split2[1];

        /*
         * Ember components require their lookupString to be massaged. Make this
         * as "pay-go" as possible.
         */
        if (namespace) {
          // This is only required because:
          // https://github.com/glimmerjs/glimmer-di/issues/45
          source = type + ':/' + rootName + '/';
        } else if (source) {
          // make absolute
          var parts = source.split(':src/ui/');
          source = parts[0] + ':/' + rootName + '/' + parts[1];
          source = source.split('/template.hbs')[0];
        }

        var _cleanupEmberSpecifie = cleanupEmberSpecifier(specifier, source, rootName),
            _specifier = _cleanupEmberSpecifie[0],
            _source = _cleanupEmberSpecifie[1];

        var absoluteSpecifier = this._glimmerResolver.identify(_specifier, _source);

        if (absoluteSpecifier) {
          return absoluteSpecifier;
        }

        absoluteSpecifier = this._glimmerResolver.identify(_specifier);

        if (absoluteSpecifier) {
          return specifier;
        }
      }

      return specifier;
    },
    resolve: function resolve(specifier) {
      var source = null;
      if (!isAbsoluteSpecifier(specifier)) {
        var _cleanupEmberSpecifie2 = cleanupEmberSpecifier(specifier, source, this._configRootName),
            _specifier = _cleanupEmberSpecifie2[0],
            _source = _cleanupEmberSpecifie2[1];

        specifier = _specifier;
        source = _source;
      }

      return this._glimmerResolver.resolve(specifier, source);
    }
  });

  exports.default = Resolver;
});