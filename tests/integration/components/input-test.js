import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | input", function (hooks) {
  setupRenderingTest(hooks);

  test("Input with no attributes is rendered", async function (assert) {
    await render(hbs`<Input />`);

    assert.dom(".input").exists();
  });

  test("Passing in a value sets the value to it", async function (assert) {
    await render(hbs`<Input @value="My input is cool" />`);

    assert.dom(".input").hasValue("My input is cool");
  });

  test("Input is disabled", async function (assert) {
    await render(hbs`<Input @disabled={{true}} />`);

    assert.dom(".input").hasAttribute("disabled");
  });

  test("Input is in a not valid state", async function (assert) {
    await render(hbs`<Input @isInvalid={{true}} />`);

    assert.dom(".input").hasClass("invalid").hasAttribute("aria-invalid");
  });

  test("User can pass in an icon or text to show before input", async function (assert) {
    await render(hbs`<Input @before="$" />`);

    assert.dom("div.inputContainer").exists();
    assert.dom(".beforeInput").exists();
    assert.dom("input.hasBefore").exists();
    assert.dom(".beforeInput").hasText("$");
  });

  test("User can pass in an icon or text to show after input", async function (assert) {
    await render(hbs`<Input @after="$" />`);

    assert.dom("div.inputContainer").exists();
    assert.dom(".afterInput").exists();
    assert.dom("input.hasAfter").exists();
    assert.dom(".afterInput").hasText("$");
  });

  test("User can pass in an icon or text to show before or after input", async function (assert) {
    await render(hbs`<Input @before="$" @after="@" />`);

    assert.dom(".beforeInput").containsText("$");
    assert.dom(".afterInput").containsText("@");
  });
});
