const DB = (() => {
  if (process.isServer || typeof window === 'undefined' || !('localStorage' in window))
    return {
      _data      : {},
      setItem    (id, val) { return this._data[id] = String(val); },
      getItem    (id) { return this._data.hasOwnProperty(id) ? this._data[id] : undefined; },
      removeItem (id) { return delete this._data[id]; },
      clear      () { return this._data = {}; }
    }
  return window.localStorage
})()

class Storage {
  constructor(name, local) {
    this.name = name
    this.local = local
  }

  setJSON(id, val) {
    try {
      let data = JSON.stringify(val)
      this.setItem(id, data)
    } catch(error) {
      console.warn(error.message)
    }
  }
  getJSON(id) {
    try {
      let data = this.getItem(id)
      return JSON.parse(data)
    } catch (error) {
      console.warn(error.message)
      return {}
    }
  }
  setItem(id, val) {
    return DB.setItem(`${this.name}_${id}`, val)
  }
  getItem(id) {
    return DB.getItem(`${this.name}_${id}`)
  }
  remove(id) {
    return DB.removeItem(`${this.name}_${id}`)
  }
}

export default Storage