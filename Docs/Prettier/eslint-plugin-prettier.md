# eslint-plugin-prettier

Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

其原理是 eslint 先使用 prettier 对你的代码进行格式化，然后与格式化之前的代码进行对比，如果过出现了不一致就会报错提示，可以用 --fix 参数修复 error  
 vscode 只安装 Eslint 扩展而不需要安装 Prettier - Code formatter， 如果运用了此插件

First you should install **eslint-config-prettier** if you have setted other ESLint rules relating to code formatting.  
Second install **eslint-plugin-prettier** and **Prettier**

> npm install --save-dev eslint-plugin-prettier  
> npm install --save-dev --save-exact prettier

Then you need to add the follow configuration in your .eslintrc.json:

```json
{
  "extends": ["prettier"], // 关掉 ESLint 格式问题的配置；prettier 一定要是最后一个，才能确保覆盖
  // 把 Prettier 推荐的格式问题的配置以 ESLint rules 的方式写入
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

将上面两个步骤和在一起就是下面的配置，也是官方的推荐配置  
 This does three things:

- Enables eslint-plugin-prettier.
- Sets the prettier/prettier rule to "error".
- Extends the eslint-config-prettier configuration.

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```

## Auto-Fix on Save for ESLint

    ```json
    "editor.codeActionsOnSave": {
        // For ESLint
        "source.fixAll.eslint": true,
        // For TSLint
        "source.fixAll.tslint": true,
        // For Stylelint
        "source.fixAll.stylelint": true
    }
    ```

## Prettier Config Options

    While it is possible to pass options to Prettier via your ESLint configuration file, it is not recommended because editor extensions such as prettier-atom and prettier-vscode will read .prettierrc, but won't read settings from ESLint, which can lead to an inconsistent experience.

1. The first option:
   > An object representing options that will be passed into prettier. Example:  
   > This option will merge and override any config set with .prettierrc files
   ```json
   {
     "prettier/prettier": ["error", { "singleQuote": true, "parser": "flow" }]
   }
   ```
2. The second option:
   - usePrettierrc: Enables loading of the Prettier configuration file, (default: true). May be useful if you are using multiple tools that conflict with each other, or do not wish to mix your ESLint settings with your Prettier configuration.
   ```json
   {
     "prettier/prettier": ["error", {}, { "usePrettierrc": false }]
   }
   ```
   - fileInfoOptions: Options that are passed to prettier.getFileInfo to decide whether a file needs to be formatted. Can be used for example to opt-out from ignoring files located in node_modules directories.
   ```json
   {
     "prettier/prettier": [
       "error",
       {},
       { "fileInfoOptions": { "withNodeModules": true } }
     ]
   }
   ```
3. The rule is autofixable -- if you run eslint with the --fix flag, your code will be formatted according to prettier style.
