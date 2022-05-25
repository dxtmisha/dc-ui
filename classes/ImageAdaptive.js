import EventControl from './EventControl'

export default class ImageAdaptive {
  static _element = []
  static _event
  static _time
  static _old = ''
  static _min = 128

  static is (element) {
    return this._element.findIndex(item => item.element === element)
  }

  static add (
    element,
    x,
    y,
    listener
  ) {
    const key = this.is(element)

    if (key !== -1) {
      this._element[key].x = x
      this._element[key].y = y
      this._element[key].listener = listener
    } else {
      this._element.push({
        element,
        x,
        y,
        listener
      })
    }

    this.init()
  }

  static remove (element) {
    const key = this.is(element)

    if (key !== -1) {
      this._element.splice(key, 1)
    }

    return this
  }

  static init () {
    this._old = ''

    if (
      this._event &&
      this._element.length === 0) {
      this._event.stop()
      this._event = undefined
    } else if (!this._event) {
      this._event = EventControl.init(window, () => this.event(), ['scroll', 'resize'])
      this._event.go()
    }

    this.go()
  }

  static event () {
    if (!this._time) {
      this._time = setTimeout(() => {
        this._time = undefined
        this.go()
      }, 128)
    }
  }

  static go () {
    const focus = []
    let index = ''

    this._element.forEach((item, key) => {
      const rect = item.element.value?.getBoundingClientRect()

      if (
        !(
          rect.bottom < (0 - this._min) ||
          rect.top > (window.innerHeight + this._min)
        )
      ) {
        focus.push(item)
        index += key
      }
    })

    if (index !== this._old) {
      this._old = index
      this.resize(focus)
    }

    return this
  }

  static resize (focus) {
    let maxX, maxY

    focus.forEach(item => {
      if (item.x > maxX || maxX === undefined) {
        maxX = item.x
      }

      if (item.y > maxY || maxY === undefined) {
        maxY = item.y
      }
    })

    if (maxX || maxY) {
      const oneX = maxX ? 100 / maxX : undefined
      const oneY = maxY ? 100 / maxY : undefined

      focus.forEach(item => item.listener(
        oneX ? item.x * oneX : undefined,
        oneY ? item.y * oneY : undefined
      ))
    }
  }
}
