# eslint-plugin-react-hooks

    This ESLint plugin enforces the Rules of Hooks.

    It is a part of the Hooks API for React.

## Installation

> npm install eslint-plugin-react-hooks --save-dev  
> yarn add eslint-plugin-react-hooks --dev

## Then extend the recommended eslint config:

```json
{
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ]
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
