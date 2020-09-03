import Component from "@glimmer/component";
import { isEmpty } from "@ember/utils";
import { tracked } from "@glimmer/tracking";

export default class HeadingComponent extends Component {
  @tracked textColor = `defaultColor`;

  constructor() {
    super(...arguments);

    let color = this.args.color;

    if (!isEmpty(color)) {
      this.textColor = `${color}Color`;
    }
  }
}
