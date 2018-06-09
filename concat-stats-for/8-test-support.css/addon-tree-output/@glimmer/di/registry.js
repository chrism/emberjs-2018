define('@glimmer/di/registry', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Registry = function () {
        function Registry(options) {
            _classCallCheck(this, Registry);

            this._registrations = {};
            this._registeredOptions = {};
            this._registeredInjections = {};
            if (options && options.fallback) {
                this._fallback = options.fallback;
            }
        }

        Registry.prototype.register = function register(specifier, factoryDefinition, options) {
            this._registrations[specifier] = factoryDefinition;
            if (options) {
                this._registeredOptions[specifier] = options;
            }
        };

        Registry.prototype.registration = function registration(specifier) {
            var registration = this._registrations[specifier];
            if (registration === undefined && this._fallback) {
                registration = this._fallback.registration(specifier);
            }
            return registration;
        };

        Registry.prototype.unregister = function unregister(specifier) {
            delete this._registrations[specifier];
            delete this._registeredOptions[specifier];
            delete this._registeredInjections[specifier];
        };

        Registry.prototype.registerOption = function registerOption(specifier, option, value) {
            var options = this._registeredOptions[specifier];
            if (!options) {
                options = {};
                this._registeredOptions[specifier] = options;
            }
            options[option] = value;
        };

        Registry.prototype.registeredOption = function registeredOption(specifier, option) {
            var result = void 0;
            var options = this.registeredOptions(specifier);
            if (options) {
                result = options[option];
            }
            if (result === undefined && this._fallback !== undefined) {
                result = this._fallback.registeredOption(specifier, option);
            }
            return result;
        };

        Registry.prototype.registeredOptions = function registeredOptions(specifier) {
            var options = this._registeredOptions[specifier];
            if (options === undefined) {
                var _specifier$split = specifier.split(':'),
                    type = _specifier$split[0];

                options = this._registeredOptions[type];
            }
            return options;
        };

        Registry.prototype.unregisterOption = function unregisterOption(specifier, option) {
            var options = this._registeredOptions[specifier];
            if (options) {
                delete options[option];
            }
        };

        Registry.prototype.registerInjection = function registerInjection(specifier, property, source) {
            var injections = this._registeredInjections[specifier];
            if (injections === undefined) {
                this._registeredInjections[specifier] = injections = [];
            }
            injections.push({
                property: property,
                source: source
            });
        };

        Registry.prototype.registeredInjections = function registeredInjections(specifier) {
            var _specifier$split2 = specifier.split(':'),
                type = _specifier$split2[0];

            var injections = this._fallback ? this._fallback.registeredInjections(specifier) : [];
            Array.prototype.push.apply(injections, this._registeredInjections[type]);
            Array.prototype.push.apply(injections, this._registeredInjections[specifier]);
            return injections;
        };

        return Registry;
    }();

    exports.default = Registry;
});