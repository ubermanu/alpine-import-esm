import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'

export default {
  input: pkg.module,
  output: {
    file: pkg.main,
    name: '$import',
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
    terser(),
    filesize(),
  ],
}
