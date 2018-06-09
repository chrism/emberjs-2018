define('ember-glimmer-component/component-managers/glimmer', ['exports'], function (exports) {
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

  var _class = function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: 'create',
      value: function create(_ref) {
        var ComponentClass = _ref.ComponentClass,
            args = _ref.args;

        var component = ComponentClass.create(args);
        component.args = args;
        return component;
      }
    }, {
      key: 'update',
      value: function update(component, args) {
        Ember.set(component, 'args', args);
      }
    }, {
      key: 'didUpdate',
      value: function didUpdate(component) {
        if (typeof component.didUpdate === 'function') {
          component.didUpdate(component);
        }
      }
    }, {
      key: 'didCreate',
      value: function didCreate(component) {
        if (typeof component.didRender === 'function') {
          component.didRender();
        }
        if (typeof component.didInsertElement === 'function') {
          component.didInsertElement();
        }
      }
    }, {
      key: 'getContext',
      value: function getContext(component) {
        return component;
      }
    }], [{
      key: 'create',
      value: function create() {
        return new this();
      }
    }]);

    return _class;
  }();

  exports.default = _class;
});