module.exports = {
  extends : "eslint:recommended",
  env     : {
    browser  : true,
    amd      : true,
    commonjs : true
  },
  rules   : {
    "no-unused-vars" : 0,
    "quote-props"    : [2, "as-needed", {keywords : true}]
  },

  /**
   * for no-undef.
   *
   * @see http://eslint.org/docs/user-guide/configuring#specifying-globals
   */
  globals : {
    verifyCellphoneNumber : false,
    orderController       : false,
    utility               : false
  }
};
