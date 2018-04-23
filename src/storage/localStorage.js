export default {
  set: (key, value) => {
    localStorage[key] = value
    return localStorage[key]
  },
  get: (key, defaultValue) => localStorage[key] || defaultValue,
  setObject: (key, value) => {
    localStorage[key] = JSON.stringify(value)
    return localStorage[key]
  },
  getObject: key => JSON.parse(localStorage[key] || '{}'),
  clear: () => localStorage.clear()
}
