import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | checkbox", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<Checkbox />`);

    assert.dom(".checkbox").exists();
  });

  test("Invalid checkbox has some extra classes", async function (assert) {
    await render(hbs`<Checkbox @invalid={{true}} />`);

    assert.dom(".invalid").exists();
    assert.dom("input").hasAttribute("aria-invalid");
  });
});
