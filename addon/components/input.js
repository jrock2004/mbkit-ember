import Component from "@glimmer/component";
import { action } from "@ember/object";
import { guidFor } from "@ember/object/internals";

export default class InputComponent extends Component {
  divId = null;

  @action
  handleFocus(element) {
    // If you don't have before and after toggle input
    if (!this.args.before && !this.args.after) {
      element.target.classList.toggle("hasFocus");
    } else {
      let divId = document.getElementById(`${this.divId}`);

      divId.classList.toggle("hasFocus");
    }
  }

  get containerClass() {
    let css = "inputContainer",
      { before, after, invalid } = this.args;

    if (before && after) {
      css = `${css} beforeInput afterInput`;
    } else if (before) {
      css = `${css} beforeInput`;
    } else if (after) {
      css = `${css} afterInput`;
    }

    if (invalid) {
      css = `${css} invalid`;
    }

    return css;
  }

  get inputClass() {
    let css = "input",
      { before, after, invalid } = this.args;

    if (before && after) {
      css = `${css} hasBefore hasAfter`;
    } else if (before) {
      css = `${css} hasBefore`;
    } else if (after) {
      css = `${css} hasAfter`;
    }

    if (invalid) {
      css = `${css} invalid`;
    }

    return css;
  }

  constructor() {
    super(...arguments);

    this.divId = guidFor(this);
  }
}
