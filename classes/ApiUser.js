import Cookie from './Cookie'
import getRandom from '../functions/getRandom'
import Geo from './Geo'

export default class ApiUser {
  static _usersLimit = process.env?.VUE_APP_API_USERS_LIMIT || 8
  static _usersLocale = process.env?.VUE_APP_API_LOCALE || null

  static get idLocale () {
    return localStorage.getItem('__dcUi-api-locale') || this._usersLocale
  }

  static set idLocale (value) {
    Geo.globalLang = undefined
    return localStorage.setItem('__dcUi-api-locale', value || this._usersLocale)
  }

  static get idAccess () {
    return localStorage.getItem('__dcUi-api-access') || null
  }

  static set idAccess (value) {
    if (value === null) {
      localStorage.removeItem('__dcUi-api-access')
    } else {
      localStorage.setItem('__dcUi-api-access', value)
    }
  }

  static get idRefresh () {
    return Cookie.get('__dcUi-api-refresh')
  }

  static set idRefresh (value) {
    Cookie.set('__dcUi-api-refresh', value || '', value === null ? 0 : 30 * 24 * 60 * 60)
  }

  static get idSignature () {
    let id = localStorage.getItem('__dcUi-api-signature')

    if (!id) {
      id = `${new Date().getMilliseconds()}-${getRandom(100000, 900000)}`
      localStorage.setItem('__dcUi-api-signature', id)
    }

    return id
  }

  static get user () {
    return JSON.parse(localStorage.getItem('__dcUi-api-user') || '{}')
  }

  static get users () {
    return JSON.parse(localStorage.getItem('__dcUi-api-users') || '[]')
  }

  /**
   * @param {null|Object.<string, string>} data
   */
  static set users (data) {
    if (data !== null) {
      const users = this.users

      const index = users.findIndex(item => item.id === data.identifier)
      const value = {
        id: data.identifier,
        name: data.text,
        avatar: data.avatar
      }

      if (index >= 0) {
        users[index] = value
      } else {
        users.push(value)

        if (users.length > this._usersLimit) {
          users.shift()
        }
      }

      localStorage.setItem('__dcUi-api-user', JSON.stringify(value))
      localStorage.setItem('__dcUi-api-users', JSON.stringify(users))
    } else {
      localStorage.removeItem('__dcUi-api-user')
    }
  }

  /**
   * @param {Object.<string, string>} data
   */
  static initUser (data) {
    this.idAccess = data.token
    this.idRefresh = data.refresh
    this.users = data
  }

  static initLocale () {
    const locale = ApiUser.idLocale

    if (locale) {
      document.querySelector('html').setAttribute('lang', locale)
    }
  }

  static logout () {
    this.idAccess = null
    this.idRefresh = null
    this.users = null
  }
}
