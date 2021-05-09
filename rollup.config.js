import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: pkg.module,
  output: {
    file: pkg.main,
    name: '$import',
    format: 'umd',
  },
  plugins: [terser()],
}
