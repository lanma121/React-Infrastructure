# eslint-plugin-babel<https://github.com/babel/eslint-plugin-babel>

> NOTE: eslint-plugin-babel is now @babel/eslint-plugin and has moved into the Babel monorepo.

    An eslint plugin companion to babel-eslint. babel-eslint does a great job at adapting eslint for use with Babel, but it can't change the built in rules to support experimental features. eslint-plugin-babel re-implements problematic rules so they do not give false positives or negatives.

## Installation

> npm install eslint-plugin-babel --save-dev

## Load the plugin in your .eslintrc file:

```json
{
  "plugins": ["babel"]
}
```

## Custom Configuration

    If you want more fine-grained configuration, you can instead add a snippet like this to your ESLint configuration file:

    ```json
    {
        "plugins": [
            // ...
            "react-hooks"
        ],
        "rules": {
            // ...
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn"
        }
    }
    ```

## Advanced Configuration

    exhaustive-deps can be configured to validate dependencies of custom Hooks with the additionalHooks option. This option accepts a regex to match the names of custom Hooks that have dependencies.

    ```json
    {
        "rules": {
            // ...
            "react-hooks/exhaustive-deps": ["warn", {
                    "additionalHooks": "(useMyCustomHook|useMyOtherCustomHook)"
                }
            ]
        }
    }
    ```

    We suggest to use this option very sparingly, if at all. Generally saying, we recommend most custom Hooks to not use the dependencies argument, and instead provide a higher-level API that is more focused around a specific use case.
