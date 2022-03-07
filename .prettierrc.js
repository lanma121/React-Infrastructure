/**
 * https://prettier.io/docs/en/options.html
 */

// prettier.config.js or .prettierrc.js
module.exports = {
  // endOfLine: "auto",
  //...require("@company/prettier-config"), // import config by other module
  // Configuration Overrides
  overrides: [
    {
      files: "*.test.js",
      options: {
        semi: true,
        // parser: "flow",  switch to the flow parser instead of the default babel for *.test.js files:
      },
    },
  ],
};








