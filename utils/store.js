export const withPrefix = (types, prefix) =>
  addPrefix(types, trimSlashes(prefix))

const trimSlashes = str => str.replace(/(\/|\s)*$/, '')

const addPrefix = (obj, prefix) => {
  if (typeof obj === 'string') {
    return `${prefix}/${obj}`
  } else {
    const result = {}
    for (let [key, value] of Object.entries(obj)) {
      result[key] = addPrefix(value, prefix)
    }
    return result
  }
}
