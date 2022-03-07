const { execSync } = require("child_process");
const { resolveApp } = require("./paths");
const fs = require("fs");

const getLintPaths = () => {
  return execSync(
    "git diff --diff-filter=d --cached --name-only c89a7cdfabe8eaa00bb325c73f3ff92b90566113"
  )
    .toString()
    .split("\n")
    .reduce(
      (paths, path) =>
        /^(src|config|scripts|mock)(\\|\/)/.test(path)
          ? paths.concat(resolveApp(path))
          : paths,
      []
    );
};

const validFileType = (path, types) =>
  types && types.length
    ? new RegExp("\\.(" + types.join("|") + ")$").test(path)
    : true;

const isDirectory = (pathName) => {
  return fs.lstatSync("./" + pathName).isDirectory();
};

const getPathsByShell = (shell) => execSync(shell).toString().split("\n");

const recursDir = (pathArr, dir, fileTypes) => {
  return pathArr.reduce((paths, path) => {
    if (!path) {
      return paths;
    }
    const fullPath = dir + path;
    if (isDirectory(fullPath)) {
      return paths.concat(
        recursDir(
          getPathsByShell("ls " + fullPath),
          fullPath.endsWith("/") ? fullPath : fullPath + "/",
          fileTypes
        )
      );
    }
    return validFileType(fullPath, fileTypes) ? paths.concat(fullPath) : paths;
  }, []);
};

const getModifiedPaths = () => {
  return getPathsByShell(
    "git status --porcelain | grep -E -v '^s?D ' | sed -e 's/^[?M ]* //'"
  );
};

const getModifiedFiles = (fileTypes) => {
  return recursDir(getModifiedPaths(), "", fileTypes);
};

const getEslintFiles = () => {
  return getModifiedFiles(["js", "ts", "tsx", "jsx"]);
};

const getStylelintFiles = () => {
  return getModifiedFiles(["less", "css", "sass", "scss"]);
};

module.exports = {
  getLintPaths,
  getModifiedFiles,
  getModifiedPaths,
  getEslintFiles,
  getStylelintFiles,
  validFileType,
  recursDir,
  getPathsByShell,
  isDirectory,
};
