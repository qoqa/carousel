import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

export default {
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
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      tsconfig: 'src/carousel/tsconfig.json',
    }),
  ],
};
