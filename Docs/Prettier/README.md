<https://prettier.io/docs/en/index.html>

## What is Prettier?

It disregards the original styling\* by parsing it away and re-printing the parsed AST with its own rules

## Features

- An opinionated code formatter
- Supports many languages
- ntegrates with most editors
- Has few options

## Issues

1. Everyone in the team has a different coding style, and there is no satisfactory solution for them all.
2. Everyone's IDE has a different default settings like indentation.

## Why Prettier?

1. Prettier is to stop all the on-going debates over styles.
2. Developer are more focus on writing code. Not spend cycles on formatting.
3. Newcomer can disregard current coding style although they likely used a different coding style before.
4. Beginner can reduce mistakes caused syntax.

## Option Philosophy

Prettier is opinionated, but why are there any options at all?

- A few were added during Prettier’s infancy to make it take off at all. 🚀
- A couple were added after “great demand.” 🤔
- Some were added for compatibility reasons. 👍

## Usage

1. Install
   > npm install --save-dev --save-exact prettier  
   > yarn add --dev --exact prettier
2. Create an empty config file to let editors and other tooling know you are using Prettier:
   > .prettierrc.json
3. Create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example:
   > \# Ignore artifacts:  
   > build  
   > coverage
4. Format all files with command line:

   > npx prettier --write .  
   > yarn prettier --write .

   > prettier --write . is great for formatting everything, but for a big project it might take a little while. You may run prettier --write app/ to format a certain directory, or prettier --write app/components/Button.js to format a certain file. Or use a glob like prettier --write "app/\*_/_.test.js" to format all tests in a directory (see fast-glob for supported glob syntax).

5. Checks that files are already formatted
   > prettier --check .
6. Formatting in your editor(https://prettier.io/docs/en/editors.html)
   >

## Ignoring Code

    Use .prettierignore to ignore (i.e. not reformat) certain files and folders completely.

    Use “prettier-ignore” comments to ignore parts of files.

## Issue

   1. Delete `␍`eslint(prettier/prettier)
      > resolve1: git config --global core.autocrlf false  
      > resolve2: "endOfLine": "auto" 
      > 参考： <https://juejin.im/post/6844904069304156168>, <https://stackoverflow.com/questions/21822650/disable-git-eol-conversions/39461324#39461324>

## Prettier with Git hooks (https://prettier.io/docs/en/precommit.html)

you can add the following to your package.json to have ESLint and Prettier run before each commit, via lint-staged and husky.

> npx mrm lint-staged  
> npm install --save-dev pretty-quick husky

> // 这一行就可以安装 husky 和 lint-stage，并且配置好 husky。 husky 的作用就是咬住 Git 的 hooks 不放
> npx mrm lint-staged

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*": ["eslint --fix", "prettier --write"]
  }
}
```
