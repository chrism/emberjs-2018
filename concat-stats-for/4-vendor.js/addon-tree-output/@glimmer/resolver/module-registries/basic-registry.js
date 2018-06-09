define("@glimmer/resolver/module-registries/basic-registry", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var BasicRegistry = function () {
        function BasicRegistry() {
            var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, BasicRegistry);

            this._entries = entries;
        }

        BasicRegistry.prototype.has = function has(specifier) {
            return specifier in this._entries;
        };

        BasicRegistry.prototype.get = function get(specifier) {
            return this._entries[specifier];
        };

        return BasicRegistry;
    }();

    exports.default = BasicRegistry;
});