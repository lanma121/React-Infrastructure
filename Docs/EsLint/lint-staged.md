# Lint-Staged <https://github.com/okonet/lint-staged>

## why

     you can ensure no errors go into the repository and enforce only code style for files that will be committed when run before committing your code.

     
     This project contains a script that will run arbitrary shell tasks with a list of staged files as an argument, filtered by a specified glob pattern.

## Usage

   1. Install
       > npx mrm lint-staged

       > It will install and configure [husky]() and lint-staged depending on code quality tools from package.json dependencies so please make sure you install (npm install --save-dev) and configure all code quality tools like Prettier, ESlint prior that.

   2. Configuration
        ```json 
        {
            "lint-staged": {
                "*": "eslint --cache --fix"
            }
        }
        ```
       > These files absolute path, from the list of currently staged files and filter them using the specified glob patterns,  will be passed linters as as arguments.

       > note: Any files in **.prettierignore** will be also ignored.

    3. Using JS functions to customize tasks
