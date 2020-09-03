import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { isEmpty } from "@ember/utils";

export default class TextComponent extends Component {
  @tracked textSize = "paragraph";
  @tracked textColor = "typography-default";

  get cssClasses() {
    return `${this.textSize} ${this.textColor}`;
  }

  constructor() {
    super(...arguments);

    let { size, color } = this.args;

    if (!isEmpty(size)) {
      this.textSize = `h${size}`;
    }

    if (!isEmpty(color)) {
      this.textColor = `${color}Color`;
    }
  }
}
