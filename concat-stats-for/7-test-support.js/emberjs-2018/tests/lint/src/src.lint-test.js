define('emberjs-2018/tests/lint/src/src.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | src');

  QUnit.test('main.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'main.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('ui/components/tomster-logo/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/tomster-logo/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('ui/components/tomster-logo/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/components/tomster-logo/component.js should pass ESLint\n\n');
  });

  QUnit.test('ui/routes/application/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/routes/application/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('ui/routes/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ui/routes/application/route.js should pass ESLint\n\n');
  });
});