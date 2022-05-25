import EventControl from './EventControl'

export default class ImageAdaptive {
  static _element = []
  static _event
  static _time
  static _old = ''
  static _min = 32

  static is (element) {
    return this._element.findIndex(item => item.element === element)
  }

  static add (
    element,
    type,
    x,
    y,
    image,
    listener
  ) {
    const key = this.is(element)

    if (key !== -1) {
      this._element[key].type = type
      this._element[key].x = x
      this._element[key].y = y
      this._element[key].listener = listener
    } else {
      this._element.push({
        element,
        type: type.toString().toLowerCase(),
        x,
        y,
        image,
        listener,
        percentX: undefined,
        percentY: undefined
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
    let offsetX, offsetY

    focus.forEach(item => {
      if (item.element.value.offsetWidth < offsetX || offsetX === undefined) {
        offsetX = item.element.value.offsetWidth
      }

      if (item.element.value.offsetHeight < offsetY || offsetY === undefined) {
        offsetY = item.element.value.offsetHeight
      }

      if (item.x > maxX || maxX === undefined) {
        maxX = item.x
      }

      if (item.y > maxY || maxY === undefined) {
        maxY = item.y
      }
    })

    if (maxX || maxY) {
      const oneX = maxX ? 1 / maxX : undefined
      const oneY = maxY ? 1 / maxY : undefined
      let factorMax = 1

      focus.forEach(item => {
        const sizeX = offsetX / item.element.value.offsetWidth
        const sizeY = offsetY / item.element.value.offsetHeight
        let factor = 1
        let sizeImageX, sizeImageY

        switch (item.type) {
          case 'x':
            item.percentX = item.x * oneX * sizeX
            item.percentY = undefined
            sizeImageY = item.image.height * (item.element.value.offsetWidth * item.percentX / item.image.width)

            if (sizeImageY > item.element.value.offsetHeight) {
              factor = item.element.value.offsetHeight / sizeImageY
            }
            break
          case 'y':
            item.percentX = undefined
            item.percentY = item.y * oneY * sizeY
            sizeImageX = item.image.width * (item.element.value.offsetHeight * item.percentY / item.image.height)

            if (sizeImageX > item.element.value.offsetWidth) {
              factor = item.element.value.offsetWidth / sizeImageX
            }
            break
        }

        if (factor < factorMax) {
          factorMax = factor
        }
      })

      focus.forEach(item => item.listener(
        item.percentX ? 100 * item.percentX * factorMax : undefined,
        item.percentY ? 100 * item.percentY * factorMax : undefined
      ))
    }
  }
}
