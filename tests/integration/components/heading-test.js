import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | heading", function (hooks) {
  setupRenderingTest(hooks);

  test("Calling without as param renders an h1", async function (assert) {
    await render(hbs`<Heading />`);

    assert.dom(".h1").exists();

    await render(hbs`
      <Heading>
        My heading
      </Heading>
    `);

    assert.equal(this.element.textContent.trim(), "My heading");
  });

  test("Passing in as param of h3 will render an h3", async function (assert) {
    await render(hbs`<Heading @as="h3">A header</Heading>`);

    assert.dom(".h3").exists();
  });

  test("Passing in a color renders the text with the color", async function (assert) {
    await render(hbs`<Heading @color="error" />`);

    assert.dom(".errorColor").exists();
  });
});
