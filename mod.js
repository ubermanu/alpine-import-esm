/**
 * @param {string} path
 * @return {{}}
 */
export default function $import(path) {
  let data = {}

  import(path)
    .then((module) => {
      Object.assign(data, module.default ?? {})
    })
    .catch((e) => console.warn(e))

  return data
}
