import ApiUser from './ApiUser'

export default class Api {
  static _url = process.env.VUE_APP_API_URL || '/'
  static _auth = process.env.VUE_APP_API_AUTH || false

  static async _fetch ({
    path = '',
    method = 'GET',
    request = undefined,
    auth = this._auth,
    headers = {},
    type = 'application/json;charset=UTF-8',
    init = {}
  }) {
    const data = await (await fetch(this.getUrl(path), {
      ...init,
      method: method === 'GET' && request ? 'POST' : method,
      headers: headers === null ? undefined : this.getHeaders(auth, headers, type),
      body: request instanceof FormData || typeof request === 'string' ? request : JSON.stringify(request)
    })).json()

    if (
      auth &&
      'token' in data &&
      'refresh' in data
    ) {
      ApiUser.initUser(data)
      return this._fetch({
        path,
        method,
        request,
        auth,
        headers,
        type,
        init
      })
    } else {
      return data
    }
  }

  static async init () {
    return await this._fetch({})
  }

  static getHeaders (auth, value, type = undefined) {
    const headers = {}

    if (type) {
      headers['Content-Type'] = type
    }

    if (auth) {
      headers['API-AUTH'] = ApiUser.idAccess
      headers['API-REFRESH'] = ApiUser.idRefresh
      headers['API-SIGNATURE'] = ApiUser.idSignature
    }

    return {
      ...headers,
      ...value
    }
  }

  static getUrl (path) {
    return this._url.replace('{_locale}', ApiUser.idLocale) + path
  }

  static async response (path, request) {
    return await this._fetch({
      path,
      ...(request || {})
    })
  }

  static userLogout () {
    ApiUser.logout()
  }
}
