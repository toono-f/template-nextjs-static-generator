module.exports = {
  plugin: ["stylelint-scss"],
  extends: ["stylelint-config-recommended-scss", "stylelint-config-recess-order", "stylelint-config-prettier"],
  rules: {
    "scss/at-extend-no-missing-placeholder": null,
  },
};
