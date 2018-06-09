import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | tomster-logo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.model = {
      filename: "tomster",
      filetype: "png"
    }

    await render(hbs`<TomsterLogo @filename={{model.filename}} @filetype={{model.filetype}} />`);

    assert.equal(this.element.querySelector('img').alt, 'Tomster Logo');
  });
});
