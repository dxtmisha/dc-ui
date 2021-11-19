let ids = 1

export const createElement = function (
  parentElement,
  tagName,
  options = null,
  referenceElement = null
) {
  const element = document.createElement(tagName)

  if (typeof options === 'function') {
    options(element)
  } else if (typeof options === 'object') {
    forEach(options, (value, key) => {
      element[key] = goFunction(value)
    })
  }

  parentElement.insertBefore(element, referenceElement)
  return element
}

export const forEach = function (data, callback) {
  if (data && typeof data === 'object') {
    let values = null

    if ('forEach' in data) {
      values = []
      data.forEach((item, key) => values.push(callback(item, key, data)))
    } else {
      values = {}
      Object.entries(data).forEach(([key, item]) => {
        values[key] = callback(item, key, data)
      })
    }

    return values
  } else {
    return null
  }
}

export const frame = function (
  callback,
  next = () => false,
  end = null
) {
  requestAnimationFrame(() => {
    callback()

    if (next()) {
      frame(callback, next, end)
    } else if (end) {
      end()
    }
  })
}

export const getColumn = function (array, column) {
  return forEach(array, item => item?.[column])
}

export const getFileResult = function (file) {
  return new Promise(resolve => {
    if (isImage(file)) {
      const reader = new FileReader()
      reader.onload = event => resolve(event.target.result)
      reader.readAsDataURL(file)
    } else {
      resolve(undefined)
    }
  })
}

export const getIdElement = function (element = undefined, selector = undefined) {
  if (element) {
    if (!element.id) {
      element.setAttribute('id', `id-${ids++}`)
    }

    return selector !== undefined ? `#${element.id}${selector}`.trim() : element.id
  } else {
    return ids++
  }
}

export const getKey = function (list, selected, alias = 'value') {
  let index = -1

  for (const key in list) {
    if (isSelected(list[key]?.[alias], selected)) {
      index = parseInt(key)
      break
    }
  }

  return index
}

export const getObjectValues = function (object, keys = []) {
  const item = {}

  keys.forEach(key => {
    item[key] = object?.[key]
  })

  return item
}

export const goFunction = function (item) {
  return typeof item === 'function' ? item() : item
}

export const goScroll = function (item, selector = '.d-window__body') {
  const list = item?.closest(selector)

  if (
    item &&
    list &&
    list.scrollHeight !== list.offsetHeight
  ) {
    if (list.scrollTop > item.offsetTop) {
      list.scrollTop = item.offsetTop
    } else if (list.scrollTop + list.offsetHeight < item.offsetTop + item.offsetHeight) {
      list.scrollTop = item.offsetTop + item.offsetHeight - list.offsetHeight
    }
  }
}

export const isImage = function (file) {
  return file.type.match(/^image\//)
}

export const isSelected = function (value, selected) {
  if (Array.isArray(selected)) {
    return selected.indexOf(value) !== -1
  } else if (value === undefined) {
    return false
  } else {
    return value === selected
  }
}

export const setValues = function (
  selected,
  value,
  multiple = true,
  maxlength = undefined
) {
  let data

  if (multiple) {
    if (Array.isArray(selected)) {
      const key = selected.indexOf(value)

      if (key !== -1) {
        selected.splice(key, 1)
      } else if (!maxlength || selected.length < maxlength) {
        selected.push(value)
      }

      data = [...selected]
    } else if (selected === value) {
      data = []
    } else if (selected) {
      data = [selected, value]
    } else {
      data = [value]
    }
  } else {
    data = value
  }

  return data
}
