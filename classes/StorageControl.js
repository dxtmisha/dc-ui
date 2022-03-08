export default class StorageControl {
  /**
   * @param {Storage} type
   * @param {string} index
   * @param {*} defaultValue
   * @returns {*}
   * @private
   */
  static _read (type, index, defaultValue) {
    const read = type.getItem(index)

    if (read === null) {
      return defaultValue
    } else if (
      read === 'null' ||
      read === 'true' ||
      read === 'false' ||
      read.match(/^[[{]/ig)
    ) {
      return JSON.parse(read)
    } else if (read.match(/^[0-9.]+$/)) {
      return parseInt(read)
    } else {
      return read
    }
  }

  /**
   * @param {Storage} type
   * @param {string} index
   * @param {*} value
   * @private
   */
  static _write (type, index, value) {
    if ([undefined, null].indexOf(value) !== -1) {
      type.removeItem(index)
    } else if (typeof value === 'object') {
      type.setItem(index, JSON.stringify(value))
    } else {
      type.setItem(index, value)
    }
  }

  static get (index, defaultValue = undefined) {
    return this._read(localStorage, index, defaultValue)
  }

  static getSession (index, defaultValue = undefined) {
    return this._read(sessionStorage, index, defaultValue)
  }

  static set (index, value = undefined) {
    this._write(localStorage, index, value)
    return this
  }

  static setSession (index, value = undefined) {
    this._write(sessionStorage, index, value)
    return this
  }
}
