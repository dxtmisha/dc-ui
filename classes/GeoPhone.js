import Geo from './Geo'
import GeoFlag from './GeoFlag'
import forEach from '../functions/forEach'

export default class GeoPhone {
  static list
  static sort

  static getList () {
    return this._init().list
  }

  static getMask (country = undefined) {
    if (country === undefined) {
      return Geo.getCountryDefault()?.phoneMask
    } else {
      return Geo.getCountryByISO(country)?.phoneMask
    }
  }

  static getMaskByValue (value = '') {
    this._init()

    const data = this._getNumbers(value)
    let focus = this.sort
    let phone = ''
    let mask

    if (data.length > 0) {
      data.forEach(number => {
        if (number in focus) {
          focus = focus[number]
          mask = focus?.data
        } else {
          phone += number
        }
      })
    }

    return {
      ...mask,
      phone
    }
  }

  static _init () {
    if (this.list === undefined) {
      this.list = []
      this.sort = {}

      forEach(Geo.getBase(), item => {
        if (
          'phoneMask' in item &&
          item.phoneMask
        ) {
          this._initSort(item.phoneMask, item)
          this.list.push({
            ...GeoFlag.country(item.iso2),
            phoneCode: item?.phoneCode,
            phoneMask: item.phoneMask
          })
        }
      })
    }

    return this
  }

  static _initSort (masks, item) {
    if (Array.isArray(masks)) {
      masks.forEach(mask => this._initSort(mask, item))
    } else {
      const data = this._getNumbers(masks)
      let focus = this.sort

      data.forEach(number => {
        if (!(number in focus)) {
          focus[number] = {
            data: {
              code: undefined,
              masks: [],
              masksFull: []
            }
          }
        }

        focus = focus[number]
      })

      focus.data.code = item.iso2
      focus.data.masks.push(masks)
      focus.data.masksFull.push(masks.toString().replace(/[0-9]/ig, '*'))
    }

    return this
  }

  static _getNumbers (value) {
    return value
      .toString()
      .replace(/[^0-9]+/ig, '')
      .split('')
  }
}
