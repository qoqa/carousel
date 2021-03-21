import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

const external = Object.keys(pkg.dependencies || {});

// Other external dependencies that are not imported directly
external.push(/@material-ui\/.*/);
external.push('react');
external.push('react-dom');
external.push('react/jsx-runtime');

const rollupConfiguration = {
  input: 'src/carousel/index.ts',
  output: [
    {
      dir: 'dist/es',
      format: 'es',
    },
    {
      dir: 'dist',
      format: 'cjs',
    },
  ],
  external: external,
  plugins: [
    typescript({
      tsconfig: 'src/carousel/tsconfig-build.json',
    }),
  ],
};

export default rollupConfiguration;
