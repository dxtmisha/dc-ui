import forEach from '../functions/forEach'

export default class Hash {
  static _values = undefined
  static _hashOld = undefined

  static _init () {
    if (
      this._values === undefined ||
      this._hashOld !== location.hash
    ) {
      this._hashOld = location.hash
      this._values = {}
      location.hash.replace(/([a-zA-z-_]+)[:=]([^;]+)/ig, (all, index, value) => {
        this._values[index] = value
      })
    }
  }

  static _collect () {
    const hash = []

    forEach(this._values, (value, index) => {
      if (value !== undefined) {
        hash.push(`${index}:${value}`)
      }
    })

    location.hash = hash.length > 0 ? `#${hash.join(';')}` : ''
  }

  static get (index, defaultValue = undefined) {
    this._init()
    return this._values?.[index] || defaultValue
  }

  static set (index, value) {
    this._init()
    this._values[index] = value
    this._collect()

    return this
  }
}
