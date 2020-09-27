import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | radio", function (hooks) {
  setupRenderingTest(hooks);

  test("Radio input is render", async function (assert) {
    await render(hbs`<Radio /> Item`);

    assert.dom(".radio").exists();
    assert.equal(this.element.textContent.trim(), "Item");
  });

  test("Radio input is selected", async function (assert) {
    await render(hbs`<Radio @checked={{true}} /> Item`);

    assert.dom(".radio").isChecked();
  });

  test("Radio input is disabled", async function (assert) {
    await render(hbs`<Radio disabled /> Item`);

    assert.dom(".radio").isDisabled();
  });
});
