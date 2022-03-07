# ESLint-plugin-React <https://github.com/yannickcr/eslint-plugin-react>

    React specific linting rules for ESLint

## Installation

> npm install eslint-plugin-react --save-dev

## Configuration with default

```json
 "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
```

## Configuration with all

```json
{
  "plugins": ["react"],
  "extends": ["eslint:all", "plugin:react/all"]
}
```

## Configuartion with individual rules

```json
{
  "plugins": ["react"],
  "rules": {
    "react/jsx-uses-react": "error", //防止React被错误地标记为未使用
    "react/jsx-uses-vars": "error" //防止在JSX中使用的变量被错误地标记为未使用
  }
}
```

## Enable JSX support

```json
{
  "parserOptions": {
    "ecmaVersion": 7,
    // 开启实验属性
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      // 修饰器
      "experimentalDecorators": true,
      // 支持JSX语法
      "jsx": true
    },
    "sourceType": "module"
  }
}
```

## You should also specify settings that will be shared across all the plugin rules. [More about eslint shared settings](https://eslint.org/docs/user-guide/configuring#adding-shared-settings)

```json
{
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      "pragma": "React", // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      { "property": "freeze", "object": "Object" },
      { "property": "myFavoriteWrapper" }
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { "name": "Link", "linkAttribute": "to" }
    ]
  }
}
```

<https://zhuanlan.zhihu.com/p/84329603>

<https://www.jianshu.com/p/339bdb463964>

<https://www.cnblogs.com/yayoi/p/12448429.html>
