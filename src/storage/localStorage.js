export default {
  clear: () => localStorage.clear(),
  get: (key, defaultValue) => localStorage[key] || defaultValue,
  getObject: key => JSON.parse(localStorage[key] || '{}'),
  set: (key, value) => {
    localStorage[key] = value
    return localStorage[key]
  },
  setObject: (key, value) => {
    localStorage[key] = JSON.stringify(value)
    return localStorage[key]
  }
}
