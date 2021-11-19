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
