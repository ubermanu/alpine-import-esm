/**
 * Import a module into your component x-data.
 * Only the default export is currently supported.
 *
 * @example
 *  <div x-data="$import('./example.mjs')"></div>
 *
 * @param {string} path
 * @return {object}
 */
declare function $import(path: string): object

export default $import
