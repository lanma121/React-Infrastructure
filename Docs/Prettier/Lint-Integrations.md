# Integrating with Linters

Linters have two categories of rules:

Formatting rules: eg: max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style…

Prettier alleviates the need for this whole category of rules! Prettier is going to reprint the entire program from scratch in a consistent way, so it’s not possible for the programmer to make a mistake there anymore :)

Code-quality rules: eg no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors…

Prettier does nothing to help with those kind of rules. They are also the most important ones provided by linters as they are likely to catch real bugs with your code!

In other words, use Prettier for formatting and linters for catching bugs!

    Linters usually contain not only code quality rules, but also stylistic rules. Most stylistic rules are unnecessary when using Prettier, but worse – they might conflict with Prettier! Use Prettier for code formatting concerns, and linters for code-quality concerns

    Luckily it’s easy to turn off rules that conflict or are unnecessary with Prettier, by using these pre-made configs:

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [tslint-config-prettier](https://github.com/prettier/tslint-config-prettier)
- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)

1. we have plugins that let you run Prettier as if it was a linter rule:

- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [tslint-plugin-prettier](https://github.com/ikatyang/tslint-plugin-prettier)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier)

  By running Prettier inside your linters, you didn’t have to set up any new infrastructure and you could re-use your editor integrations for the linters. But these days you can run prettier --check . and most editors have Prettier support.

2. we have tools that runs prettier and then immediately for example eslint --fix on files.

- [prettier-eslint](https://github.com/prettier/prettier-eslint)
- [prettier-tslint](https://github.com/azz/prettier-tslint)
- [prettier-stylelint](https://github.com/hugomrdias/prettier-stylelint)

