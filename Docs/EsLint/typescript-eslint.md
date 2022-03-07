<https://github.com/typescript-eslint/typescript-eslint>

## Why does this project exist?

   > Both ESLint and TypeScript rely on turning your source code into a data format called an AST in order to do their jobs. However, they use different ASTs to each other. For example, typescript syntax will be represented in the tree(AST), but [espress](https://github.com/eslint/espree), a parser that ESLint use to parse standard JavaScript syntax, can’t understand.
    
   > If we want to support non-standard JavaScript syntax, all we need to do is provide ESLint with an alternative parser to use that is **[@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser)** , it produces a TypeScript AST and then converting that AST into a format that ESLint expects.

## Packages included in this project

   - [@typescript-eslint/typescript-estree](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/typescript-estree) - An entirely generic TypeScript parser which takes TypeScript source code and produces an ESTree-compatible AST
       
       - This package is also used to power the amazing opinionated code formatter **Prettier**'s own TypeScript use-case.
   
   - [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser) - An ESLint-specific parser which leverages **typescript-estree** and is designed to be used as a replacement for ESLint's default parser, espree.

   - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin) - An ESLint-specific plugin which, when used in conjunction with **@typescript-eslint/parser**, allows for TypeScript-specific linting rules to run.

   - [@typescript-eslint/eslint-plugin-tslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin-tslint) - An ESLint-specific plugin that runs an instance of TSLint within your ESLint setup to allow for users to more easily migrate from TSLint to ESLint.



## How does typescript-eslint work

   - ESLint invokes the parser specified in your ESLint config (**@typescript-eslint/parser** ) 
   - **@typescript-eslint/parser** deals with all the ESLint specific configuration and then invokes [@typescript-eslint/typescript-estree](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/typescript-estree), an agnostic package that is only concerned with taking TypeScript source code and producing an appropriate AST.
   - **@typescript-eslint/typescript-estree** works by invoking the TypeScript Compiler on the given source code in order to produce a TypeScript AST and then converting that AST into a format that ESLint expects.

## Can I use all of the existing ESLint plugins and rules without any changes?

   > there are many, many rules which will "just work", but some ESLint rules need alternative rules via [@typescript-eslint/eslint-plugin.](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin)

## Can we use rules of typescript such as type information?

   > ESLint references to the original TypeScript AST and associated parser services.   
   > We already do this in numerous rules within **@typescript-eslint/eslint-plugin**, for example, no-unnecessary-type-assertion and no-inferrable-types.

## What about Babel and babel-eslint?

   > Babel does now support parsing (but not type-checking) TypeScript source code. This is also as an alternative to using the TypeScript Compiler. But it also supports many other syntaxes, via plugins, which are not supported by the TypeScript Compiler.

   > **babel-eslint** supports additional syntax which TypeScript itself does not, but **typescript-eslint** supports creating rules based on type information, which is not available to babel because there is no type-checker. we are working hard to align on the AST format for non-standard JavaScript syntax. 

## Uage <https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md>

   ```js
    module.exports = {
        root: true,
        /**
         * tells ESLint to use the parser package you installed (@typescript-eslint/parser)
         *  - This allows ESLint to understand TypeScript syntax.
         *  - This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.
         */
        parser: '@typescript-eslint/parser',
        parserOptions: {
            tsconfigRootDir: __dirname, // tells our parser the absolute path of your project's root directory.
            /**
             * tells our parser the relative path where your project's tsconfig.json is.
             *  - If your project is a multi-package monorepo, 
             *      see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/MONOREPO.md.
             */
            project: ['./tsconfig.json'],
        },
        /**
         * tells ESLint to load the plugin package you installed (@typescript-eslint/eslint-plugin).
         *  - This allows you to use the rules within your codebase.
         *  - https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
         */
        plugins: [
            '@typescript-eslint',
        ],
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',  // turns on rules from our TypeScript-specific plugin.
            'plugin:@typescript-eslint/recommended-requiring-type-checking', // This one contains rules that specifically require type information.
            // 'airbnb-typescript',
            // 'eslint-config-standard-with-typescript'
            // 'prettier/@typescript-eslint', // use pretitier
        ],
    };

   ```

   1. config rules via [eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
   2. [Extending your TypeScript linting with Type-Aware Rules](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)
        > Notes: by including **parserOptions.project in your config**, you are essentially asking TypeScript to do a build of your project before ESLint can do its linting. for large projects, it can take longer (30s or more).
   3. 





## Migrating from TSLint to ESLint<https://github.com/typescript-eslint/tslint-to-eslint-config>
