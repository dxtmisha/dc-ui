import Geo from './Geo'

export const LANG_STANDARD = 'en-GB'
export default class GeoDate {
  _lang
  _value
  _type = 'datetime'
  _firstDay
  _date

  constructor (
    lang = undefined,
    value = undefined
  ) {
    this.setValue(value)
      ._lang = lang ? Geo.getFullLang(lang) : Geo.getGlobalLang()
  }

  getValue () {
    return this._value
  }

  /**
   * @param {String} value
   * @returns {GeoDate}
   */
  setValue (value = undefined) {
    if (typeof value !== 'string') {
      this._value = undefined
    } else if (value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
      this._value = `${value} 00:00:00`
    } else if (value.match(/^[0-9]{4}-[0-9]{2}$/)) {
      this._value = `${value}-01 00:00:00`
    } else if (value.match(/^[0-9]{2}:[0-9]{2}$/)) {
      this._value = `2000-01-01 ${value}:00`
    } else if (value.match(/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/)) {
      this._value = `2000-01-01 ${value}`
    } else {
      this._value = value
    }

    this._date = undefined
    return this
  }

  getType () {
    return this._type
  }

  setType (type) {
    this._type = type
    return this
  }

  getFirstDay () {
    if (!this._firstDay) {
      this._firstDay = new Geo(this._lang).getFirstDay().toLocaleLowerCase()
    }

    return this._firstDay
  }

  getFirstDayNumber () {
    return {
      mo: 1,
      sa: 6,
      su: 0
    }[this.getFirstDay()]
  }

  setFirstDay (day) {
    this._firstDay = day
    return this
  }

  getObject () {
    if (!this._date) {
      let date

      try {
        date = this._value
          ? new Date(this._value.toString().replace(' ', 'T'))
          : new Date()

        date.toISOString()
      } catch (e) {
        date = new Date()
      }

      this._date = date
    }

    return this._date
  }

  getClone () {
    const date = new Date(this.getObject())

    if (this._type === 'date') {
      date.setHours(0)
      date.setMinutes(0)
      date.setSeconds(0)
    }

    return date
  }

  getFormat () {
    const object = this.getClone()
    object.setHours(23)

    return object.toLocaleTimeString(this._lang, { hour: '2-digit' }).match(/23/ig)
      ? '24'
      : '12'
  }

  getStartDay () {
    const date = this.getClone()
    date.setDate(1)

    return date
  }

  getEndDay () {
    const date = this.getClone()

    date.setDate(1)
    date.setMonth(date.getMonth() + 1)
    date.setDate(date.getDate() - 1)

    return date
  }

  getMaxDay () {
    return this.getEndDay().toLocaleString(this._lang, { day: '2-digit' })
  }

  getPreviousMonth () {
    const date = this.getClone()

    date.setMonth(date.getMonth() - 1)
    date.setDate(1)

    return date
  }

  getNextMonth () {
    const date = this.getClone()

    date.setMonth(date.getMonth() + 1)
    date.setDate(1)

    return date
  }

  getStartDayByWeekday () {
    const week = this.getFirstDayNumber()
    const date = this.getStartDay()

    while (date.getDay() !== week) {
      date.setDate(date.getDate() - 1)
    }

    return date
  }

  getEndDayByWeekday () {
    const week = this.getFirstDayNumber()
    const date = this.getNextMonth()

    while (date.getDay() !== week) {
      date.setDate(date.getDate() + 1)
    }

    return date
  }

  getHours () {
    return this.getObject().toLocaleTimeString(LANG_STANDARD, {
      hour12: false,
      hour: '2-digit'
    })
  }

  getHoursLocale () {
    return this.getObject().toLocaleTimeString(this._lang, { hour: '2-digit' })
  }

  getMinutes () {
    return this.getObject().toLocaleTimeString(LANG_STANDARD, {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    }).split(':')[1]
  }

  getMinutesLocale () {
    return this.getObject().toLocaleTimeString(this._lang, { minute: '2-digit' })
  }

  /**
   * @param {Date} date
   * @param {String} type
   * @returns {string}
   */
  toStandard (date = undefined, type = this.getType()) {
    const object = date || this.getObject()
    let value = ''

    if (['datetime', 'date', 'month'].indexOf(type) !== -1) {
      const year = object.toLocaleDateString(LANG_STANDARD, { year: 'numeric' })
      const month = object.toLocaleDateString(LANG_STANDARD, { month: '2-digit' })

      value += ` ${year}-${month}`
    }

    if (['datetime', 'date'].indexOf(type) !== -1) {
      const day = object.toLocaleDateString(LANG_STANDARD, { day: '2-digit' })

      value += `-${day}`
    }

    if (['datetime', 'time'].indexOf(type) !== -1) {
      const time = object.toLocaleTimeString(LANG_STANDARD, {
        hour: '2-digit',
        hour12: false,
        minute: '2-digit',
        second: '2-digit'
      })

      value += ` ${time}`
    }

    return value.trim()
  }

  /**
   * @param {Date} date
   * @returns {string}
   */
  toStandardMonth (date = undefined) {
    return this.toStandard(date, 'month')
  }

  /**
   * @param {String} date
   * @param {Object} options
   * @returns {string}
   */
  toLocaleString (date = undefined, options = {}) {
    return (date ? new Date(date.replace(' ', 'T')) : this.getObject()).toLocaleString(this._lang, options)
  }

  /**
   *
   * @param {String} date
   * @param {Boolean|String} hour12
   * @returns {string}
   */
  toString (date = undefined, hour12 = false) {
    const data = {}

    if (['datetime', 'date', 'month'].indexOf(this._type) !== -1) {
      data.year = 'numeric'
      data.month = '2-digit'
    }

    if (['datetime', 'date'].indexOf(this._type) !== -1) {
      data.day = '2-digit'
    }

    if (['datetime', 'time'].indexOf(this._type) !== -1) {
      data.hour = '2-digit'
      data.minute = '2-digit'
    }

    if (hour12 !== 'auto') {
      data.hour12 = hour12
    }

    return this.toLocaleString(date, data)
  }

  /**
   * @param {String} date
   * @returns {string}
   */
  toStringMonth (date = undefined) {
    return this.toLocaleString(date, {
      year: 'numeric',
      month: 'long'
    })
  }
}
