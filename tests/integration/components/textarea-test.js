import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | textarea", function (hooks) {
  setupRenderingTest(hooks);

  test("Text area is rendered", async function (assert) {
    await render(hbs`<Textarea />`);

    assert.dom(".textarea").exists();
  });

  test("Text area has a value", async function (assert) {
    await render(hbs`<Textarea @value="Some content" />`);

    assert.dom(".textarea").hasText("Some content");
  });

  test("Text area is invalid", async function (assert) {
    await render(hbs`<Textarea @value="Some content" @invalid={{true}} />`);

    assert.dom(".textarea").hasClass("invalid").hasAttribute("aria-invalid");
  });

  test("Text area is disabled", async function (assert) {
    await render(hbs`<Textarea @value="Some content" disabled />`);

    assert.dom(".textarea").isDisabled();
  });
});
