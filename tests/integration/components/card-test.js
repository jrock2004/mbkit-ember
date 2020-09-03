import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | card", function (hooks) {
  setupRenderingTest(hooks);

  test("Default will render as a div", async function (assert) {
    await render(hbs`<Card />`);

    assert.dom("div.card").exists();
  });

  test("Passing in element will override element to that instead of a div", async function (assert) {
    await render(hbs`<Card @as={{element "article"}} />`);

    assert.dom("article").exists();
  });
});
