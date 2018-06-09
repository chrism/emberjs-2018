define('@glimmer/di/specifier', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.isSpecifierStringAbsolute = isSpecifierStringAbsolute;
    exports.isSpecifierObjectAbsolute = isSpecifierObjectAbsolute;
    exports.serializeSpecifier = serializeSpecifier;
    exports.serializeSpecifierPath = serializeSpecifierPath;
    exports.deserializeSpecifier = deserializeSpecifier;
    function isSpecifierStringAbsolute(specifier) {
        var _specifier$split = specifier.split(':'),
            type = _specifier$split[0],
            path = _specifier$split[1];

        return !!(type && path && path.indexOf('/') === 0 && path.split('/').length > 3);
    }
    function isSpecifierObjectAbsolute(specifier) {
        return specifier.rootName !== undefined && specifier.collection !== undefined && specifier.name !== undefined && specifier.type !== undefined;
    }
    function serializeSpecifier(specifier) {
        var type = specifier.type;
        var path = serializeSpecifierPath(specifier);
        if (path) {
            return type + ':' + path;
        } else {
            return type;
        }
    }
    function serializeSpecifierPath(specifier) {
        var path = [];
        if (specifier.rootName) {
            path.push(specifier.rootName);
        }
        if (specifier.collection) {
            path.push(specifier.collection);
        }
        if (specifier.namespace) {
            path.push(specifier.namespace);
        }
        if (specifier.name) {
            path.push(specifier.name);
        }
        if (path.length > 0) {
            var fullPath = path.join('/');
            if (isSpecifierObjectAbsolute(specifier)) {
                fullPath = '/' + fullPath;
            }
            return fullPath;
        }
    }
    function deserializeSpecifier(specifier) {
        var obj = {};
        if (specifier.indexOf(':') > -1) {
            var _specifier$split2 = specifier.split(':'),
                type = _specifier$split2[0],
                path = _specifier$split2[1];

            obj.type = type;
            var pathSegments = void 0;
            if (path.indexOf('/') === 0) {
                pathSegments = path.substr(1).split('/');
                obj.rootName = pathSegments.shift();
                obj.collection = pathSegments.shift();
            } else {
                pathSegments = path.split('/');
            }
            if (pathSegments.length > 0) {
                obj.name = pathSegments.pop();
                if (pathSegments.length > 0) {
                    obj.namespace = pathSegments.join('/');
                }
            }
        } else {
            obj.type = specifier;
        }
        return obj;
    }
});