import Component from "@glimmer/component";
import { action } from "@ember/object";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import { easeIn } from "ember-animated/easings/cosine";

export default class ActionBannerComponent extends Component {
  // animation = fade;

  *animation({ insertedSprites, removedSprites }) {
    removedSprites.forEach((sprite) => {
      fadeOut(sprite, { duration: 100 });
    });

    for (let sprite of insertedSprites) {
      yield fadeIn(sprite, { easing: easeIn, duration: 850 });
    }
  }

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
