const fs = require('fs');

const mainPackageJsonPath = './package.json';
const projectPackageJsonOutput = './dist/package.json';

const WHITELIST = [
  'name',
  'version',
  'license',
  'publishConfig',
  'main',
  'module',
  'types',
  'peerDependencies',
  'dependencies',
];

const packageJson = JSON.parse(fs.readFileSync(mainPackageJsonPath));

// Remove unnecessary entries
const newPackageJson = Object.keys(packageJson).reduce((result, key) => {
  if (WHITELIST.includes(key)) {
    result[key] = packageJson[key];
  }

  return result;
}, {});

const newPackageJsonFormatted = JSON.stringify(newPackageJson, undefined, 2);

fs.writeFileSync(projectPackageJsonOutput, newPackageJsonFormatted);
console.log(`${projectPackageJsonOutput} => `, newPackageJsonFormatted);
