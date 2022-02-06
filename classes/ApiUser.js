import Cookie from './Cookie'
import getRandom from '../functions/getRandom'

export default class ApiUser {
  static _usersLimit = process.env?.VUE_APP_API_USERS_LIMIT || 8

  static get idAccess () {
    return localStorage.getItem('__dcUi-api-access') || null
  }

  static set idAccess (value) {
    localStorage.setItem('__dcUi-api-access', value)
  }

  static get idRefresh () {
    return Cookie.get('__dcUi-api-refresh')
  }

  static set idRefresh (value) {
    Cookie.set('__dcUi-api-refresh', value, 30 * 24 * 60 * 60)
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
   * @param {{identifier: number, text: string, avatar: Array|Object}} data
   */
  static set users (data) {
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
  }

  /**
   * @param {{token: string, refresh: string, identifier: number, text: string, avatar: Array|Object}} data
   */
  static initUser (data) {
    this.idAccess = data.token
    this.idRefresh = data.refresh
    this.users = data
  }
}
