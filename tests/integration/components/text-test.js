import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | text", function (hooks) {
  setupRenderingTest(hooks);

  test("Calling without as param renders a p", async function (assert) {
    await render(hbs`<Text />`);

    assert.dom("p").exists();

    // Template block usage:
    await render(hbs`
      <Text>
        template block text
      </Text>
    `);

    assert.equal(this.element.textContent.trim(), "template block text");
  });

  test("Passing in as param of span will render a span", async function (assert) {
    await render(hbs`<Text @as={{element "span"}} />`);

    assert.dom("span").exists();
  });

  test("Passing in size param of 3 will add a class for size", async function (assert) {
    await render(hbs`<Text @size="1" />`);

    assert.dom(".h1").exists();
  });

  test("Passing in color renders the text with the color", async function (assert) {
    await render(hbs`<Text @color="error" />`);

    assert.dom(".errorColor").exists();
  });
});
