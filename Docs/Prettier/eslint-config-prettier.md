## eslint-config-prettier(https://github.com/prettier/eslint-config-prettier)

    Turns off all rules that are unnecessary or might conflict with Prettier.

1. Usage

   1. Installation

      > npm install --save-dev eslint-config-prettier

   2. add eslint-config-prettier to the "extends" array in your .eslintrc.\* file. Make sure to put it last, so it gets the chance to override other configs.

      ```json
      {
        "extends": ["some-other-config-you-use", "prettier"]
      }
      ```

   3. Add extra exclusions for the plugins you use like so:
      ```json
      {
        "extends": [
          "some-other-config-you-use",
          "prettier",
          "prettier/@typescript-eslint",
          "prettier/babel",
          "prettier/flowtype",
          "prettier/react",
          "prettier/standard",
          "prettier/unicorn",
          "prettier/vue"
        ]
      }
      ```
   4. If you extend a config which uses a plugin, it is recommended to add "prettier/that-plugin" (if available). For example, eslint-config-airbnb enables eslint-plugin-react rules, so "prettier/react" is needed:
      ```json
      {
        "extends": ["airbnb", "prettier", "prettier/react"]
      }
      ```
   5. A few ESLint plugins are supported as well:
      > [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)  
      > [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)  
      > [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)  
      > [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)  
      > [eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)  
      > [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)  
      > [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
   6.

   > npm install --save-dev eslint-config-prettier

2. CLI helper tool

   eslint-config-prettier also ships with a little CLI tool to help you check if your configuration contains any rules that are unnecessary or conflict with Prettier.

   You can run it using npx:(Change path/to/main.js to a file that exists in your project.)

   > npx eslint --print-config path/to/main.js | npx eslint-config-prettier-check

3. Install [**eslint-config-prettier**](https://github.com/prettier/eslint-config-prettier#installation)
4. It turns off all ESLint rules that are unnecessary or might conflict with Prettier.
