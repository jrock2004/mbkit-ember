import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | button", function (hooks) {
  setupRenderingTest(hooks);

  test("A standard button with no extra params", async function (assert) {
    await render(hbs`
      <Button>
        Primary
      </Button>
    `);

    assert.dom("button").hasClass("button");
    assert.dom("button").hasClass("primary");
    assert.dom("button").hasClass("size3");
  });

  test("Passing in a variant will change the color", async function (assert) {
    await render(hbs`
      <Button @variant="secondary">
        Secondary
      </Button>
    `);

    assert.dom("button").hasClass("button");
    assert.dom("button").hasClass("secondary");
    assert.dom("button").hasClass("size3");
  });

  test("Passing in isLoading will show a loading indicator", async function (assert) {
    await render(hbs`
      <Button @isLoading={{true}}>
        Secondary
      </Button>
    `);

    assert.dom(".loader").exists();
    assert.dom("button").hasClass("loading");
  });

  test("Passing in a size will change the size of the button", async function (assert) {
    await render(hbs`
      <Button @variant="secondary" @size="1">
        Secondary
      </Button>
    `);

    assert.dom("button").hasClass("size1");
  });
});
