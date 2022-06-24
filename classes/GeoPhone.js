import Geo from './Geo'
import GeoFlag from './GeoFlag'
import forEach from '../functions/forEach'

export default class GeoPhone {
  static list
  static sort
  static sortData

  static getList () {
    return this._init().list
  }

  static getListSort () {
    if (this.sortData === undefined) {
      const collator = new Intl.Collator(Geo.getGlobalLang())

      this.sortData = this.getList()
        .sort((a, b) => collator.compare(a.text, b.text))
    }

    return this.sortData
  }

  static getInfo (country = undefined) {
    if (country === undefined) {
      country = Geo.getCountryDefault()?.iso2
    }

    return this.getList().find(item => item.value === country)
  }

  static getMask (country = undefined) {
    return this.getInfo(country)?.phoneMask
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
          const flag = GeoFlag.country(item.iso2)
          const mask = Array.isArray(item.phoneMask) ? item.phoneMask[0] : item.phoneMask

          this._initSort(item.phoneMask, item)
          this.list.push({
            ...flag,
            icon: {
              file: flag.icon,
              zoom: 'contain'
            },
            phoneCode: item?.phoneCode,
            phoneMask: item.phoneMask,
            phoneMaskFull: mask.toString().replace(/[0-9]/ig, '*'),
            suffix: item.phoneCode
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

      if (focus.data.code === undefined) {
        focus.data.code = item.iso2
      }

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
