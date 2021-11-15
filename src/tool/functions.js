import { forEach, goFunction } from '@/dcUi'

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

export const isImage = function (file) {
  return file.type.match(/^image\//)
}
