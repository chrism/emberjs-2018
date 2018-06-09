define('@ember-decorators/object/index', ['exports', '@ember-decorators/utils/collapse-proto', '@ember-decorators/utils/compatibility', '@ember-decorators/utils/computed'], function (exports, _collapseProto, _compatibility, _computed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.readOnly = exports.computed = undefined;
  exports.action = action;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  /**
    Decorator that turns the target function into an Action
  
    Adds an `actions` object to the target object and creates a passthrough
    function that calls the original. This means the function still exists
    on the original object, and can be used directly.
  
    ```js
    export default class ActionDemoComponent extends Component {
      @action
      foo() {
        // do something
      }
    }
    ```
  
    ```hbs
    <!-- template.hbs -->
    <button onclick={{action "foo"}}>Execute foo action</button>
    ```
  
    @return {Function}
  */
  function action(target, key, desc) {
    (true && !(desc && typeof desc.value === 'function') && Ember.assert('The @action decorator must be applied to functions', desc && typeof desc.value === 'function'));


    (0, _collapseProto.default)(target);

    if (false) {
      if (!target.hasOwnProperty('_actions')) {
        var parentActions = target._actions;
        target._actions = parentActions ? Object.create(parentActions) : {};
      }

      target._actions[key] = desc.value;
    } else {
      if (!target.hasOwnProperty('actions')) {
        var _parentActions = target.actions;
        target.actions = _parentActions ? Object.create(_parentActions) : {};
      }

      target.actions[key] = desc.value;
    }

    return desc;
  }

  /**
    Decorator that turns a native getter/setter into a computed property. Note
    that though they use getters and setters, you must still use the Ember `get`/
    `set` functions to get and set their values.
  
    ```js
    import Component from '@ember/component';
    import { computed } from 'ember-decorators/object';
  
    export default class UserProfileComponent extends Component {
      first = 'John';
      last = 'Smith';
  
      @computed('first', 'last')
      get name() {
        const first = this.get('first');
        const last = this.get('last');
  
        return `${first} ${last}`; // => 'John Smith'
      }
  
      set name(value) {
        if (typeof value !== 'string' || !value.test(/^[a-z]+ [a-z]+$/i)) {
          throw new TypeError('Invalid name');
        }
  
        const [first, last] = value.split(' ');
        this.setProperties({ first, last });
  
        return value;
      }
    }
    ```
  
    @function
    @param {...string} propertyNames - List of property keys this computed is dependent on
    @return {ComputedProperty}
  */
  var computed = exports.computed = (0, _computed.computedDecoratorWithParams)(function (target, key, desc, params) {
    (true && !(!desc.isDescriptor) && Ember.assert('ES6 property getters/setters only need to be decorated once, \'' + key + '\' was decorated on both the getter and the setter', !desc.isDescriptor));
    (true && !('get' in desc || 'set' in desc) && Ember.assert('Attempted to apply @computed to ' + key + ', but it is not a native accessor function. Try converting it to `get ' + key + '()`', 'get' in desc || 'set' in desc));
    (true && !('get' in desc && desc.get !== undefined) && Ember.assert('Using @computed for only a setter does not make sense. Add a getter for \'' + key + '\' as well or remove the @computed decorator.', 'get' in desc && desc.get !== undefined));
    var get = desc.get,
        set = desc.set;

    // Unset the getter and setter so the descriptor just has a plain value

    desc.get = undefined;
    desc.set = undefined;

    var setter = void 0;

    if (typeof set === 'function') {
      setter = function setter(key, value) {
        var ret = set.call(this, value);
        return typeof ret === 'undefined' ? get.call(this) : ret;
      };
    } else if (true) {
      setter = function setter() {
        (true && !(false) && Ember.assert('You must provide a setter in order to set \'' + key + '\' as a computed property.', false));
      };

      // Set flag to assert on redundant @readOnly
      setter.isMissingSetter = true;
    }

    return _compatibility.computed.apply(undefined, _toConsumableArray(params).concat([{ get: get, set: setter }]));
  });

  /**
    Decorator that modifies a computed property to be read only.
  
    ```js
    import Component from '@ember/component';
    import { computed, readOnly } from 'ember-decorators/object';
  
    export default class extends Component {
      @readOnly
      @computed('first', 'last')
      name(first, last) {
        return `${first} ${last}`;
      }
    }
    ```
  
    @deprecated
    @function
    @return {ComputedProperty}
  */
  var readOnly = exports.readOnly = (0, _computed.computedDecorator)(function (target, name, desc) {
    (true && !(desc && desc.isDescriptor) && Ember.assert('Attempted to apply @readOnly to \'' + name + '\', but it was not a computed property. Note that @readOnly must come before computed decorators', desc && desc.isDescriptor));
    (true && !(!desc._setter || !desc._setter.isMissingSetter) && Ember.assert('Attempted to apply @readOnly to a computed property that didn\'t have a setter, which is unnecessary', !desc._setter || !desc._setter.isMissingSetter));
    (true && !(false) && Ember.deprecate('Used @readOnly decorator on ' + name + '. The @readOnly decorator (imported from \'@ember-decorators/object) has been deprecated and will be removed in future releases. To make a computed property readOnly, remove its \'set\' function', false, { until: '3.0.0', id: 'ember-decorators-read-only-decorator' }));


    return desc.readOnly();
  });
});