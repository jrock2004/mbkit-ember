"use strict";

module.exports = {
  name: require("./package").name,
  include: function () {
    this._super.included.apply(this, arguments);
  },
};
