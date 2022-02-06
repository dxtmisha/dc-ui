export default class Cookie {
  static controlling
  static data

  static init () {
    if (
      this.data === undefined ||
      this.controlling !== document.cookie
    ) {
      const cookie = document.cookie.split(';')

      this.controlling = document.cookie
      this.data = {}

      for (const item of cookie) {
        const [index, value] = item.trim().split('=')
        this.data[index] = value
      }
    }

    return this
  }

  static has (name) {
    return name in this.data
  }

  static get (name, valueDefault = undefined) {
    const value = this.init().data?.[name]

    if (value !== undefined) {
      return value
    } else if (valueDefault !== undefined) {
      this.set(name, valueDefault)
      return valueDefault
    } else {
      return null
    }
  }

  static set (name, value, age = 24 * 60 * 60, argument = []) {
    document.cookie = [
      `${encodeURIComponent(name.toString().trim())}=${encodeURIComponent(value.toString().trim())}`,
      `max-age=${age}`,
      ...argument
    ].join('; ')

    return this
  }

  static remove (name) {
    return this.set(name, '', -1)
  }
}
