module.exports = {
    extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
    // plugins: ["stylelint-declaration-use-variable"],
    rules: {
      //  The plugin checks whether some style properties use variable
      // "sh-waqar/declaration-use-variable": [["/color/", "z-index", "font-size"]],
    },
    defaultSeverity: "error",
    processors: [],
    ignoreFiles: [],
  };
  