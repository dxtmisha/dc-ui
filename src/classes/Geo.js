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

  getNumber (value, options = {}) {
    return new Intl.NumberFormat(this._lang, options).format(value)
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
    return geoMedia?.filter(item => `${item?.languageCodes}-${item?.iso2}` === code)?.[0]
  }
}
