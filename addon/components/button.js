import Component from "@glimmer/component";
import { isEmpty } from "@ember/utils";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";

export default class ButtonComponent extends Component {
  @tracked buttonSize = "size3";
  @tracked buttonColor = "primary";
  @tracked css = "";

  elementId = guidFor(this);

  @action
  generateRipple(e) {
    const btn = document.getElementById(`${this.elementId}`);

    if (this.buttonColor === "simpleText") {
      return;
    }

    if (!btn) {
      return;
    }

    const posX = e.clientX - btn.getBoundingClientRect().left;
    const posY = e.clientY - btn.getBoundingClientRect().top;
    const ripple = document.createElement("div");
    ripple.className = "ripple";

    ripple.style.top = `${posY - 6}px`;
    ripple.style.left = `${posX - 6}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      btn.removeChild(ripple);
    }, 466);
  }

  constructor() {
    super(...arguments);

    let { variant, size, isLoading } = this.args,
      css = "button";

    if (isEmpty(variant)) {
      css = `${css} ${this.buttonColor}`;
    } else {
      this.buttonColor = variant;

      css = `${css} ${variant}`;
    }

    if (!isEmpty(size)) {
      css = `${css} size${size}`;
    } else {
      css = `${css} size3`;
    }

    if (!isEmpty(isLoading)) {
      css = `${css} loading`;
    }

    this.css = css;
  }
}
