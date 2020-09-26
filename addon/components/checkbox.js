import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class CheckboxComponent extends Component {
  @tracked ariaChecked = null;
  @tracked isChecked = false;

  @action
  setCheckStatus() {
    let checked = this.args.checked;

    if (checked === "mixed") {
      this.isChecked = false;
      this.ariaChecked = checked;
    } else {
      this.isChecked = checked;
      this.ariaChecked = null;
    }
  }
}
