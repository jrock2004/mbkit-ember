import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ActionBannerStatesComponent extends Component {
  @tracked showError = true;
  @tracked showWarning = true;

  @action
  toggleError() {
    this.showError = !this.showError;
  }

  @action
  toggleWarning() {
    this.showWarning = !this.showWarning;
  }
}
