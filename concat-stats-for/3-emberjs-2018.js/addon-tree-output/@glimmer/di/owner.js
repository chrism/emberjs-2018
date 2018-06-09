define('@glimmer/di/owner', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getOwner = getOwner;
    exports.setOwner = setOwner;
    // TODO - use symbol
    var OWNER = exports.OWNER = '__owner__';
    function getOwner(object) {
        return object[OWNER];
    }
    function setOwner(object, owner) {
        object[OWNER] = owner;
    }
});