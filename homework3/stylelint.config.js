/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
    "stylelint-config-recess-order"
  ],
  "plugins": ["stylelint-order"]
};