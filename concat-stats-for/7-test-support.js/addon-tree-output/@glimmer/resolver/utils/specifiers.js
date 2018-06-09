define('@glimmer/resolver/utils/specifiers', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.detectLocalResolutionCollection = detectLocalResolutionCollection;
    function detectLocalResolutionCollection(specifier) {
        var namespace = specifier.namespace,
            collection = specifier.collection;

        // Look for the local-most private collection contained in the namespace
        // (which will appear closest to the end of the string)
        var startPos = namespace.lastIndexOf('/-');
        if (startPos > -1) {
            startPos += 2;
            var endPos = namespace.indexOf('/', startPos);
            collection = namespace.slice(startPos, endPos > -1 ? endPos : undefined);
        }
        return collection;
    }
});