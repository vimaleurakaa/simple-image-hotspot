import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
  input: 'src/Lib/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    typescript(),
    uglify(),
  ],
  external: ['react', 'react-dom', /\.(sass|scss|css)$/],
};
