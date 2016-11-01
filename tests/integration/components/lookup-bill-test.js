import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lookup-bill', 'Integration | Component | lookup bill', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lookup-bill}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lookup-bill}}
      template block text
    {{/lookup-bill}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
