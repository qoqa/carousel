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
  'dependencies',
];

const peerDependencies = {
  '@material-ui/core': '^4',
  '@material-ui/icons': '^4',
  react: '*',
  'react-dom': '*',
};

const packageJson = JSON.parse(fs.readFileSync(mainPackageJsonPath));

// Remove unnecessary entries
const newPackageJson = Object.keys(packageJson).reduce((result, key) => {
  if (WHITELIST.includes(key)) {
    result[key] = packageJson[key];
  }

  return result;
}, {});

newPackageJson.peerDependencies = peerDependencies;

const newPackageJsonFormatted = JSON.stringify(newPackageJson, undefined, 2);

fs.writeFileSync(projectPackageJsonOutput, newPackageJsonFormatted);
console.log(`${projectPackageJsonOutput} => `, newPackageJsonFormatted);
