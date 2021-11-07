import { forEach, goFunction } from '@/uses/useObject'

let ids = 1

/**
 * В HTML-документах создаёт элемент c тем тегом, что указан в аргументе
 * или HTMLUnknownElement, если имя тега не распознаётся
 * @param {HTMLElement} parentElement
 * @param {string} tagName
 * @param {Object} options
 * @param {HTMLElement} referenceElement
 * @returns {*}
 */
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
