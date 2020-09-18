import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class ActionBannerComponent extends Component {
  get cssClasses() {
    let css = "actionBanner",
      variant = this.args.variant;

    if (variant === "warning") {
      css = `${css} warning`;
    } else if (variant === "error") {
      css = `${css} error`;
    }

    return css;
  }

  @action
  handleClose() {
    if (this.args.onClose) {
      this.args.onClose();
    } else {
      console.error("You need to pass in an onClose action to handle close");
    }
  }
}
