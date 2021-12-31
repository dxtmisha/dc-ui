export default class EventControl {
  _element
  _domElement
  _type = ['click']
  _property = {}
  _listener = () => null
  _once = false

  _activity = false

  constructor (element) {
    this._element = typeof element === 'string' ? document.querySelector(element) : element
  }

  static init (
    element,
    listener,
    type = ['click'],
    property = {},
    once = false
  ) {
    return (new EventControl(element))
      .setType(type)
      .setProperty(property)
      .setListener(listener)
      .setOnce(once)
  }

  setDomElement (element) {
    this._domElement = typeof element === 'string' ? document.querySelector(element) : element
    return this
  }

  setType (type) {
    this._type = Array.isArray(type) ? type : [type]
    return this
  }

  setProperty (property, value = undefined) {
    if (typeof property === 'string') {
      this._property[property] = value
    } else if (typeof property === 'object') {
      this._property = property
    }

    return this
  }

  getListener () {
    return this._listener
  }

  setListener (listener) {
    if (typeof listener === 'function') {
      this._listener = event => {
        if (this._once === true) {
          this.stop()
        } else if (this._domElement && !this._domElement.closest('html')) {
          return
        }

        event.$event = this
        event.$element = this._element
        event.$domElement = this._domElement
        event.$property = this._property

        listener.call(this._element, event, this._property)
      }
    } else {
      this._listener = undefined
    }

    return this
  }

  setOnce (once) {
    this._once = once
    return this
  }

  go () {
    if (this._listener && this._activity === false) {
      this._activity = true
      this._type.forEach(type => this._element.addEventListener(type, this._listener))
    }

    return this
  }

  goOnce () {
    this._once = true
    this.go()

    return this
  }

  stop () {
    if (this._activity === true) {
      this._activity = false
      this._type.forEach(type => this._element.removeEventListener(type, this._listener))
    }

    return this
  }

  toggle (go = undefined) {
    if (go) {
      this.go()
    } else {
      this.stop()
    }

    return this
  }

  dispatch () {
    this._type.forEach(type =>
      this._element.dispatchEvent(new CustomEvent(type, { detail: this._property }))
    )

    return this
  }
}
