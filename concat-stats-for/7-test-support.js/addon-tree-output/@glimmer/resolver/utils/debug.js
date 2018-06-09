define('@glimmer/resolver/utils/debug', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.assert = assert;
    function assert(description, test) {
        if (!test) {
            throw new Error('Assertion Failed: ' + description);
        }
    }
});