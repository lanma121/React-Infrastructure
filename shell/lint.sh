#!/bin/bash
re=.eslintignore
esLintFiles=$(git diff --diff-filter=d --name-only c89a7cdfabe8eaa00bb325c73f3ff92b90566113 | grep -E "(src|config|mock|scripts)(\/).*\.(js|tsx|ts|jsx)$" )
styleLintFiles=$(git diff --diff-filter=d --name-only c89a7cdfabe8eaa00bb325c73f3ff92b90566113 | grep -E "(src|config|mock|scripts)(\/).*\.(less|css)$" )
yarn eslint ${esLintFiles[*]} --color $*
yarn stylelint  ${styleLintFiles[*]} --allow-empty-input $*
