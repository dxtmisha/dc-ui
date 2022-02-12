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
    init = {}
  }) {
    const data = await (await fetch(this._url + path, {
      ...init,
      method: method === 'GET' && request ? 'POST' : method,
      headers: headers === null ? undefined : this.getHeaders(auth, headers),
      body: request ? JSON.stringify(request) : undefined
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
        init
      })
    } else {
      return data
    }
  }

  static async init () {
    return await this._fetch({})
  }

  static getHeaders (auth, value) {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8'
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

  static userLogout () {
    ApiUser.logout()
  }
}
