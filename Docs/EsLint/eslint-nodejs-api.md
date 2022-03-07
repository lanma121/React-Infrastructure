# Node.js API<https://cn.eslint.org/docs/developer-guide/nodejs-api>

  Node.js API 的目的是使插件和工具的作者可以直接使用 ESLint 的功能，而不需要通过命令行接口。

##  SourceCode 对象

  ```js
  var SourceCode = require("eslint").SourceCode;

  var code = new SourceCode("var foo = bar;", ast);
  ```

## Linter 对象

  > Linter 对象对 JavaScript 代码进行评估。它不会对文件系统进行操作，它只会简单地解析和报告代码。特别是，Linter 对象不会处理配置对象或文件。你可以这样取得 Linter 实例：

  ```js
  var Linter = require("eslint").Linter;
  var linter = new Linter();
  var messages = linter.verify("var foo;", //要检测的源代码（字符串或者 SourceCode 的实例）。
    // - 一个配置对象，被 CLIEngine 用来处理和规范，使用 eslintrc 文件和/或其它配置参数
    {
      rules: {
          semi: 2
      }
    }, { filename: "foo.js" });
  ```
  ## CLIEngine 对象

    该对象会读取文件系统获得配置和文件信息，但不会输出任何结果。相反，它允许你直接访问重要信息，这样你就可以自己处理输出结果。

    

