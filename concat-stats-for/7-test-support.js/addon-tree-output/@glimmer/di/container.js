define('@glimmer/di/container', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Container = function () {
        function Container(registry) {
            var resolver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            _classCallCheck(this, Container);

            this._registry = registry;
            this._resolver = resolver;
            this._lookups = {};
            this._factoryDefinitionLookups = {};
        }

        Container.prototype.factoryFor = function factoryFor(specifier) {
            var factoryDefinition = this._factoryDefinitionLookups[specifier];
            if (!factoryDefinition) {
                if (this._resolver) {
                    factoryDefinition = this._resolver.retrieve(specifier);
                }
                if (!factoryDefinition) {
                    factoryDefinition = this._registry.registration(specifier);
                }
                if (factoryDefinition) {
                    this._factoryDefinitionLookups[specifier] = factoryDefinition;
                }
            }
            if (!factoryDefinition) {
                return;
            }
            return this.buildFactory(specifier, factoryDefinition);
        };

        Container.prototype.lookup = function lookup(specifier) {
            var singleton = this._registry.registeredOption(specifier, 'singleton') !== false;
            if (singleton) {
                var lookup = this._lookups[specifier];
                if (lookup) {
                    return lookup.instance;
                }
            }
            var factory = this.factoryFor(specifier);
            if (!factory) {
                return;
            }
            if (this._registry.registeredOption(specifier, 'instantiate') === false) {
                return factory.class;
            }
            var instance = factory.create();
            if (singleton && instance) {
                this._lookups[specifier] = { factory: factory, instance: instance };
            }
            return instance;
        };

        Container.prototype.defaultInjections = function defaultInjections(specifier) {
            return {};
        };

        Container.prototype.teardown = function teardown() {
            var specifiers = Object.keys(this._lookups);
            for (var i = 0; i < specifiers.length; i++) {
                var specifier = specifiers[i];
                var _lookups$specifier = this._lookups[specifier],
                    factory = _lookups$specifier.factory,
                    instance = _lookups$specifier.instance;

                factory.teardown(instance);
            }
        };

        Container.prototype.defaultTeardown = function defaultTeardown(instance) {};

        Container.prototype.buildInjections = function buildInjections(specifier) {
            var hash = this.defaultInjections(specifier);
            var injections = this._registry.registeredInjections(specifier);
            var injection = void 0;
            for (var i = 0; i < injections.length; i++) {
                injection = injections[i];
                hash[injection.property] = this.lookup(injection.source);
            }
            return hash;
        };

        Container.prototype.buildFactory = function buildFactory(specifier, factoryDefinition) {
            var _this = this;

            var injections = this.buildInjections(specifier);
            return {
                class: factoryDefinition,
                teardown: function teardown(instance) {
                    if (factoryDefinition.teardown) {
                        factoryDefinition.teardown(instance);
                    } else {
                        _this.defaultTeardown(instance);
                    }
                },
                create: function create(options) {
                    var mergedOptions = Object.assign({}, injections, options);
                    return factoryDefinition.create(mergedOptions);
                }
            };
        };

        return Container;
    }();

    exports.default = Container;
});