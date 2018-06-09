define('emberjs-2018/src/ui/components/tomster-logo/component', ['exports', 'ember-glimmer-component', '@ember-decorators/component', '@ember-decorators/object'], function (exports, _emberGlimmerComponent, _component, _object) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _dec2, _class, _desc, _value, _class2;

  var TomsterLogo = (_dec = (0, _component.classNames)('static-class'), _dec2 = (0, _object.computed)('@filename', '@filetype'), _dec(_class = (_class2 = function (_Component) {
    _inherits(TomsterLogo, _Component);

    function TomsterLogo() {
      _classCallCheck(this, TomsterLogo);

      return _possibleConstructorReturn(this, (TomsterLogo.__proto__ || Object.getPrototypeOf(TomsterLogo)).apply(this, arguments));
    }

    _createClass(TomsterLogo, [{
      key: 'tomsterPath',
      get: function get() {
        return '/img/' + this.filename + '.' + this.filetype;
      }
    }]);

    return TomsterLogo;
  }(_emberGlimmerComponent.CompatComponent), (_applyDecoratedDescriptor(_class2.prototype, 'tomsterPath', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'tomsterPath'), _class2.prototype)), _class2)) || _class);
  exports.default = TomsterLogo;
});