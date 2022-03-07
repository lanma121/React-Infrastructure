#!/bin/bash
# Fix untracked and modified files by eslint and stylelint
re=.eslintignore
# esLintFiles=$(git diff --name-only --diff-filter=d "*.js" "*.ts" "*.tsx" "*.jsx")
# stylelintFiles=$(git diff --name-only --diff-filter=d "*.less" "*.css")
# echo "$esLintFiles" | sed -n -e '/\.js$/p' -e '/\.tsx$/p' -e '/\.ts$/p' -e '/\.jsx$/p'
esLintFiles=$(git status --porcelain | grep -E -v '^\s?D ' | sed -e 's/^[?M ]* //' | grep -E ".*\.(js|tsx|ts|jsx)$")
stylelintFiles=$(git status --porcelain | grep -E -v '^\s?D ' | sed -e 's/^[?M ]* //' | grep -E ".*\.(less|css)$")

# eslint js file
if [ -z $esLintFiles ]
then
  echo "eslint: There are not files ending with '*.js,ts,tsx,jsx' to lint"
else
  yarn eslint ${esLintFiles} --color --fix $*
fi
# stylelint css file
if [ -z $stylelintFiles ]
then
  echo "stylelint: These are not files ending with '*.less,css' to lint"
else
  yarn stylelint ${stylelintFiles} --color --fix $*
fi
