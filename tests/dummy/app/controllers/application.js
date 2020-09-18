import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ApplicationController extends Controller {
  @tracked modalOpened = true;

  @action
  closeModal() {
    this.modalOpened = !this.modalOpened;
  }
}
