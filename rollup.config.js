import { terser } from 'rollup-plugin-terser'

export default {
  input: 'mod.js',
  output: {
    file: 'dist/alpine-import-module.js',
    name: '$import',
    format: 'umd',
  },
  plugins: [terser()],
}
