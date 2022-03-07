# Husky

    Husky is Git hooks, it can prevent bad git commit, git push and more 🐶 woof!

# Usage 

    ```json
        // package.json
    {
        "husky": {
            "hooks": {
                "pre-commit": "npm test",
                "pre-push": "npm test",
                "...": "..."
            }
        }
    }
    ```

