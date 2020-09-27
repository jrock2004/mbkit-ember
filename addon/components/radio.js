import Component from "@glimmer/component";

export default class RadioComponent extends Component {
  get inputClass() {
    let css = "radio",
      { invalid } = this.args;

    if (invalid) {
      css = `${css} invalid`;
    }

    return css;
  }
}
