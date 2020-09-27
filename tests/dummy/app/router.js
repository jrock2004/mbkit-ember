import AddonDocsRouter, { docsRoute } from "ember-cli-addon-docs/router";
import config from "dummy/config/environment";

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  docsRoute(this, function () {
    this.route("action-banner");
    this.route("button");
    this.route("card");
    this.route("checkbox");
    this.route("input");
    this.route("label");
    this.route("radio");
    this.route("textarea");
    this.route("toggle");
    this.route("typography");
  });

  this.route("not-found", { path: "/*path" });
});
