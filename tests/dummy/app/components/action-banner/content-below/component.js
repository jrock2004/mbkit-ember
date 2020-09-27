import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ActionBannerConentBelowComponent extends Component {
  @tracked showError = false;

  @action
  toggleError() {
    this.showError = !this.showError;
  }
}
