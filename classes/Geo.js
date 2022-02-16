import geoMedia from '../media/geo.json'

export default class Geo {
  static globalLang

  _lang
  _country

  constructor (lang = undefined) {
    this._lang = lang ? Geo.getFullLang(lang) : Geo.getGlobalLang()
  }

  getCountry () {
    if (!this._country) {
      this._country = Geo.getCountryByCode(this._lang)
    }

    return this._country
  }

  getDisplay (
    value,
    type = 'language',
    style = 'long',
    options = {}
  ) {
    let text

    try {
      text = new Intl.DisplayNames(this._lang, {
        type,
        style,
        languageDisplay: 'standard',
        ...options
      }).of(value)
    } catch (e) {
      text = value
    }

    return text
  }

  getListFormat (
    value,
    type,
    style,
    options = {}
  ) {
    let text

    try {
      text = new Intl.ListFormat(this._lang, {
        type,
        style,
        ...options
      }).format(value)
    } catch (e) {
      text = value.join(', ')
    }

    return text
  }

  getNumber (value, options = {}) {
    const number = Geo.toNumber(value)

    return number === undefined
      ? value
      : new Intl.NumberFormat(this._lang, options).format(number)
  }

  getCurrency (
    value,
    currency = undefined,
    currencyDisplay = undefined,
    options = {}
  ) {
    let number
    let toCurrency = currency

    if (
      typeof value === 'string' &&
      value.match(/ [a-zA-Z]{3}$/ig)
    ) {
      value.replace(/^([\S\s]+) ([a-zA-Z]{3})$/ig, (all, s1, s2) => {
        number = Geo.toNumber(s1)
        toCurrency = s2.toUpperCase()
      })
    } else {
      number = Geo.toNumber(value)
    }

    return number === undefined || !toCurrency
      ? value
      : new Intl.NumberFormat(this._lang, {
        style: 'currency',
        currency: toCurrency,
        currencyDisplay,
        ...options
      }).format(number)
  }

  getDate (
    value,
    type = undefined,
    display = undefined,
    options = {}
  ) {
    const date = value instanceof Date ? value : new Date(value.toString().replace(' ', 'T'))
    const toDisplay = display === '2-digit' ? '2-digit' : 'numeric'

    /**
     * @type {Intl.DateTimeFormatOptions}
     */
    const toOptions = { ...options }

    if (['datetime', 'date', 'month'].indexOf(type) !== -1) {
      toOptions.year = 'numeric'
      toOptions.month = display
    }

    if (['datetime', 'date'].indexOf(type) !== -1) {
      toOptions.day = toDisplay
    }

    if (['datetime', 'time', 'time-full'].indexOf(type) !== -1) {
      toOptions.hour = toDisplay
      toOptions.minute = toDisplay
    }

    if (['time-full'].indexOf(type) !== -1) {
      toOptions.second = toDisplay
    }

    return date.toLocaleString(this._lang, toOptions)
  }

  getRelative (
    value,
    unit = undefined,
    display = 'long',
    numeric = 'always',
    options = {}
  ) {
    const abs = Math.abs(value)
    const toDisplay = display === 'long' ? 'long' : 'short'

    /**
     * @type {"hour"|"month"|"day"}
     */
    let toUnit = unit

    if (toUnit === undefined) {
      if (abs < 1) {
        toUnit = 'hour'
        value *= 24
      } else if (abs > 30) {
        toUnit = 'month'
        value /= 30
      } else {
        toUnit = 'day'
      }
    }

    const toValue = Math.round(value)

    return toValue === 0
      ? ''
      : new Intl.RelativeTimeFormat(this._lang, {
        numeric,
        style: toDisplay,
        ...options
      }).format(toValue, toUnit)
  }

  getFirstDay () {
    return this.getCountry()?.firstDay || 'Mo'
  }

  /**
   * @returns {Array}
   */
  getListMonth (month = 'long') {
    const date = new Date()
    const format = Intl.DateTimeFormat(this._lang, { month })
    const list = [
      {
        text: '',
        value: undefined
      }
    ]

    for (let i = 0; i < 12; i++) {
      date.setMonth(i)
      list.push({
        text: format
          .format(date)
          .replace(/^./, (character) => character.toUpperCase()),
        value: i + 1
      })
    }

    return list
  }

  getListWeekday (weekday = 'long') {
    const date = new Date()
    const format = Intl.DateTimeFormat(this._lang, { weekday })
    const list = [
      {
        text: '',
        value: undefined
      }
    ]
    let currentWeekday = date.getDay()

    switch (this.getFirstDay()) {
      case 'Mo':
        currentWeekday--
        break
      case 'Sa':
        currentWeekday++
        break
    }

    date.setDate(date.getDate() - currentWeekday)

    for (let i = 0; i < 7; i++) {
      list.push({
        text: format
          .format(date)
          .replace(/^./, (character) => character.toUpperCase()),
        value: date.getDay()
      })
      date.setDate(date.getDate() + 1)
    }

    return list
  }

  static getGlobalLang () {
    if (!this.globalLang) {
      this.globalLang = this.getFullLang(
        document.querySelector('html')?.getAttribute('lang') || ''
      )
    }

    return this.globalLang
  }

  static getFullLang (lang = '') {
    let value

    if (lang.match(/-/)) {
      value = lang
    } else if (lang.match(/^[a-z]{2}$/)) {
      value = `${lang}-${geoMedia?.filter(item => item?.languageCodes === lang)?.[0]?.iso2}`
    } else if (lang.match(/^[A-Z]{2}$/)) {
      value = `${geoMedia?.filter(item => item?.iso2 === lang)?.[0]?.languageCodes}-${lang}`
    } else {
      value = navigator.languages?.filter(code => this.getCountryByCode(code) !== undefined)?.[0]
    }

    return value.match(/undefined/) || !value.match(/-/) ? 'en-GB' : value
  }

  static getCountryByCode (code) {
    return geoMedia?.filter(
      /**
       * @param {Object.<string, string>} item
       * @returns {boolean}
       */
      item => `${item?.languageCodes}-${item?.iso2}` === code
    )?.[0]
  }

  static toNumber (value) {
    const number = typeof value !== 'string'
      ? value
      : parseFloat(
        value
          .replace(',', '.')
          .replace(/[^0-9.]+/ig, '')
      )

    return Number.isNaN(number) ? undefined : number
  }
}
