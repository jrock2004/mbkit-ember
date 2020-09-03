import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | link", function (hooks) {
  setupRenderingTest(hooks);

  test("Passing in href will give you a link with href", async function (assert) {
    await render(hbs`
      <Link @href="google.com">
        template block text
      </Link>
    `);

    assert.dom("a").hasAttribute("target");
    assert.dom("a").hasAttribute("rel");
  });

  test("Not passing in href will give you ember router link", async function (assert) {
    await render(hbs`
      <Link @route="index">
        template block text
      </Link>
    `);

    assert.dom("a").doesNotHaveAttribute("target");
    assert.dom("a").doesNotHaveAttribute("rel");
  });
});
