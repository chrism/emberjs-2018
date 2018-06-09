define('ember-glimmer-component/components/glimmer-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  exports.default = Ember._setComponentManager(function () {
    function Glimber(options) {
      _classCallCheck(this, Glimber);

      Object.assign(this, options);
    }

    _createClass(Glimber, null, [{
      key: 'create',
      value: function create() {
        return new (Function.prototype.bind.apply(this, [null].concat(Array.prototype.slice.call(arguments))))();
      }
    }, {
      key: 'isComponentFactory',
      get: function get() {
        return true;
      }
    }]);

    return Glimber;
  }(), 'glimmer');
});