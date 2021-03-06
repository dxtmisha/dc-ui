import ApiUser from './ApiUser'

export default class Translation {
  static _language
  static _translations = {}

  static get (name) {
    return this._translations?.[name] || name
  }

  static init (paths = {}) {
    ApiUser.initLocale()
    const lang = ApiUser.idLocale

    this._language = lang

    return this.import(paths?.[lang])
  }

  /**
   * @param {Function|[...Function]} path
   * @returns {Promise<void>}
   */
  static async import (path) {
    for (const item in (Array.isArray(path) ? path : [path])) {
      this.add((await path[item]()).default)
    }

    return this
  }

  static add (translations) {
    if (translations) {
      if (typeof translations === 'string') {
        try {
          translations = JSON.parse(translations)
        } catch (e) {
          translations = undefined
        }
      }

      if (typeof translations === 'object') {
        Object.assign(this._translations, translations)
      }
    }

    return this
  }

  static getByList (list) {
    const data = {}

    list.forEach(name => {
      data[name] = Translation.get(name)
    })

    return data
  }
}
