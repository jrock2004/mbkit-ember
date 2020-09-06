import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | toggle", function (hooks) {
  setupRenderingTest(hooks);

  test("Toggle renders", async function (assert) {
    await render(hbs`<Toggle />`);

    assert.dom(".toggle").exists();
  });

  test("Toggle rendereds checked", async function (assert) {
    await render(hbs`<Toggle @checked={{true}} />`);

    assert.dom(".toggle").isChecked();
  });

  test("Toggle rendereds disabled", async function (assert) {
    await render(hbs`<Toggle disabled @checked={{true}} />`);

    assert.dom(".toggle").isDisabled();
  });

  test("Toggle can accept a size attribute", async function (assert) {
    await render(hbs`<Toggle @size="2" />`);

    assert.dom(".size2").exists();
  });
});
