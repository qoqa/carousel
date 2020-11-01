const { rollup } = require('rollup');
const acorn = require('acorn');
const virtual = require('rollup-plugin-virtual');
const pkg = require('./package.json');
const external = Object.keys(pkg.dependencies || {});

// Other external dependencies that are not imported directly
external.push(/@material-ui\/.*/);
external.push('react');
external.push('react-dom');

// Check that the bundle is empty when tree shaken.
// Inspired by https://github.com/Rich-Harris/agadoo/blob/master/index.js
function check() {
  return rollup({
    input: '__virual_input__',
    external: external,
    plugins: [
      virtual({
        __virual_input__: `import * as Bundle from './dist/es/index'`,
      }),
    ],
    onwarn: (warning, handle) => {
      if (warning.code !== 'EMPTY_BUNDLE') handle(warning);
    },
  })
    .then((bundle) =>
      bundle.generate({
        format: 'esm',
      })
    )
    .then((result) => {
      const { code } = result.output[0];

      const ast = acorn.parse(code, {
        ecmaVersion: 11,
        sourceType: 'module',
      });

      const nodes = ast.body.filter((node) => {
        return node.type !== 'ImportDeclaration';
      });

      if (nodes.length > 0) {
        throw new Error(
          `The bundle is not tree shakable. Content: \r\n${code}`
        );
      }

      return {
        shaken: nodes.length === 0,
      };
    });
}

check();
