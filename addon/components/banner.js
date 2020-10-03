import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { isEmpty } from "@ember/utils";

export default class BannerComponent extends Component {
  @tracked variant = "success";

  constructor() {
    super(...arguments);

    let passedVariant = this.args.variant;

    if (!isEmpty(passedVariant)) {
      this.variant = passedVariant;
    }
  }
}
