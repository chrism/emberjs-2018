define('@glimmer/resolver/resolver', ['exports', '@glimmer/di', '@glimmer/resolver/utils/debug', '@glimmer/resolver/utils/specifiers'], function (exports, _di, _debug, _specifiers) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Resolver = function () {
        function Resolver(config, registry) {
            _classCallCheck(this, Resolver);

            this.config = config;
            this.registry = registry;
        }

        Resolver.prototype.identify = function identify(specifier, referrer) {
            if ((0, _di.isSpecifierStringAbsolute)(specifier)) {
                return specifier;
            }
            var s = (0, _di.deserializeSpecifier)(specifier);
            var result = void 0;
            if (referrer) {
                var r = (0, _di.deserializeSpecifier)(referrer);
                if ((0, _di.isSpecifierObjectAbsolute)(r)) {
                    (0, _debug.assert)('Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer', s.rootName === undefined && s.collection === undefined && s.namespace === undefined);
                    s.rootName = r.rootName;
                    s.collection = r.collection;
                    var definitiveCollection = this._definitiveCollection(s.type);
                    if (!s.name) {
                        /*
                         * For specifiers without a name use the referrer's name and
                         * do not fallback to any other resolution rules.
                         */
                        s.namespace = r.namespace;
                        s.name = r.name;
                        return this._serializeAndVerify(s);
                    }
                    s.namespace = r.namespace ? r.namespace + '/' + r.name : r.name;
                    if ((0, _specifiers.detectLocalResolutionCollection)(s) === definitiveCollection) {
                        /*
                         * For specifiers with a name, try local resolution. Based on
                         * the referrer.
                         */
                        if (result = this._serializeAndVerify(s)) {
                            return result;
                        }
                    }
                    // Look for a private collection in the referrer's namespace
                    if (definitiveCollection) {
                        s.namespace += '/-' + definitiveCollection;
                        if (result = this._serializeAndVerify(s)) {
                            return result;
                        }
                    }
                    // Because local and private resolution has failed, clear all but `name` and `type`
                    // to proceed with top-level resolution
                    s.rootName = s.collection = s.namespace = undefined;
                } else {
                    (0, _debug.assert)('Referrer must either be "absolute" or include a `type` to determine the associated type', r.type);
                    // Look in the definitive collection for the associated type
                    s.collection = this._definitiveCollection(r.type);
                    if (!s.namespace) {
                        s.namespace = r.rootName;
                    }
                    (0, _debug.assert)('\'' + r.type + '\' does not have a definitive collection', s.collection);
                }
            }
            // If the collection is unspecified, use the definitive collection for the `type`
            if (!s.collection) {
                s.collection = this._definitiveCollection(s.type);
                (0, _debug.assert)('\'' + s.type + '\' does not have a definitive collection', s.collection);
            }
            if (!s.rootName) {
                // If the root name is unspecified, try the app's `rootName` first
                s.rootName = this.config.app.rootName || 'app';
                if (result = this._serializeAndVerify(s)) {
                    return result;
                }
                // Then look for an addon with a matching `rootName`
                if (s.namespace) {
                    s.rootName = s.namespace;
                    s.namespace = undefined;
                } else {
                    s.rootName = s.name;
                    s.name = 'main';
                }
            }
            if (result = this._serializeAndVerify(s)) {
                return result;
            }
        };

        Resolver.prototype.retrieve = function retrieve(specifier) {
            return this.registry.get(specifier);
        };

        Resolver.prototype.resolve = function resolve(specifier, referrer) {
            var id = this.identify(specifier, referrer);
            if (id) {
                return this.retrieve(id);
            }
        };

        Resolver.prototype._definitiveCollection = function _definitiveCollection(type) {
            var typeDef = this.config.types[type];
            (0, _debug.assert)('\'' + type + '\' is not a recognized type', typeDef);
            return typeDef.definitiveCollection;
        };

        Resolver.prototype._serializeAndVerify = function _serializeAndVerify(specifier) {
            var serialized = (0, _di.serializeSpecifier)(specifier);
            if (this.registry.has(serialized)) {
                return serialized;
            }
        };

        return Resolver;
    }();

    exports.default = Resolver;
});