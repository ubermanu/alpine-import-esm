/**
 * Import a module into your component x-data.
 * Only the default export is currently supported.
 *
 * @example
 *  <div x-data="$import('./example.mjs')"></div>
 *
 * @param {string} path
 * @return {{}}
 */
Alpine.addMagicProperty('import', (el) => {
  return (path) => {
    let data = {}

    import(path)
      .then((module) => {
        Object.assign(data, module.default ?? {})
        el.__x?.updateElements(el)
      })
      .catch((e) => console.warn(e))

    return data
  }
})
