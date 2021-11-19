import Translation from './Translation'
import { forEach, getColumn, isSelected } from '@/tool/functions'

export default class List {
  _list
  _init
  _text = 'text'
  _key = 'value'
  _translation = []
  _group = {}

  _caching = {
    all: null,
    first: null
  }

  constructor (
    list,
    init = true,
    translation = [],
    text = 'text',
    key = 'value'
  ) {
    this._init = init
    this._text = text
    this._key = key
    this._translation = Array.isArray(translation) ? translation : []

    this.set(list)
  }

  _initList (list) {
    const data = []

    forEach(list, (item, value) => {
      const object = this._object(item, value)

      if (object) {
        this._translation.forEach(alias => {
          if (object?.[alias]) {
            object[alias] = Translation.get(object[alias])
          }
        })

        data.push(object)
      }
    })

    return data
  }

  _object (item, value) {
    let data

    if (typeof item === 'object') {
      data = {
        ...item,
        value: item?.[this._key] || item?.value || value || undefined,
        text: item?.[this._text] || item?.text || item?.value || ''
      }

      if (item?.list) {
        data.list = this._initList(item.list)
      }

      if (item?.menu) {
        data.menu = this._initList(item.menu)
      }
    } else {
      data = {
        text: item,
        value
      }
    }

    return data
  }

  _read (list, section = true) {
    const data = []

    forEach(list, item => {
      if (
        !item?.line &&
        !item?.space &&
        !item?.subtitle &&
        !item?.html
      ) {
        if (item?.list && (section || this._group?.[item.value])) {
          data.push(item, ...this._read(item.list))
        } else if (item?.menu && (section)) {
          data.push(item, ...this._read(item.menu))
        } else {
          data.push(item)
        }
      }
    })

    return data
  }

  get group () {
    return this._group
  }

  getGroup () {
    return this._group
  }

  setGroup (group) {
    this._caching.first = null
    this._group = group
    return this
  }

  setGroupItem (index, value) {
    this._caching.first = null
    this._group[index] = value
    return this
  }

  get () {
    return this._list
  }

  set (list) {
    this._caching.all = null
    this._caching.first = null
    this._list = this._init ? this._initList(list) : list
    return this
  }

  getAll () {
    return this._caching.all || (this._caching.all = this._read(this._list))
  }

  getFirst () {
    return this._caching.first || (this._caching.first = this._read(this._list, false))
  }

  getSection (value) {
    let data = null

    this.getFirst()
      .forEach(item => {
        if (item.value === value) {
          data = item?.menu || item?.list
        }
      })

    return new List(
      data,
      false,
      this._translation,
      this._text,
      this._key
    ).setGroup(this._group)
  }

  getSelected (selected) {
    return this.getAll().filter(item => isSelected(item.value, selected))
  }

  getColumn (column, selected = undefined) {
    return getColumn(selected !== undefined ? this.getSelected(selected) : this.getAll(), column)
  }

  getNames (selected = null) {
    return this.getColumn('text', selected)
  }

  getValues (selected = null) {
    return this.getColumn('value', selected)
  }
}
