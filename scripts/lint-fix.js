// const { execSync } = require("child_process");
var CLIEngine = require("eslint").CLIEngine;
const chalk = require("react-dev-utils/chalk");

const {
  getModifiedPaths,
  validFileType,
} = require("../config/getLintPaths.js");

const paths = getModifiedPaths();
// const eslintFiles = paths.filter((path) =>
//   validFileType(path, ["js", "ts", "tsx", "jsx"])
// );
// const stylelintFiles = paths.filter((path) =>
//   validFileType(path, ["less", "css", "sass", "scss"])
// );

console.log(paths);
// console.log(stylelintFiles);

// execSync("yarn eslint " + eslintFiles.join("\n"));

const cli = new CLIEngine({
  // envs: ["browser", "mocha"],
  fix: true,
  extensions: ["js", "ts", "tsx", "jsx"],
});

const report = cli.executeOnFiles(paths);
// output fixes to disk
CLIEngine.outputFixes(report);

const array = report.results;

for (let index = 0; index < array.length; index++) {
  const { filePath, messages } = array[index];

  if (
    messages.length === 0 ||
    messages[0].message.includes(
      "File ignored because of a matching ignore pattern"
    )
  ) {
    continue;
  }

  console.log(filePath + "\n");
  messages.forEach(({ line, column, message, severity, ruleId }) => {
    console.log(
      `  ${chalk.gray(line + ":" + column)}  ${
        severity === 1 ? chalk.yellow("warning") : chalk.red("error")
      }  ${message}  ${chalk.gray(ruleId)} \n`
    );
  });
}

console.log(
  chalk.red(`${report.errorCount} errors ${report.warningCount} warnings`)
);
console.log(
  chalk.red(
    `  ${report.fixableErrorCount} errors and ${report.fixableWarningCount} warnings potentially fixable with the --fix option.`
  )
);
