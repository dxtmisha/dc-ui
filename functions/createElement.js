import forEach from './forEach'
import goFunction from './goFunction'

export default function createElement (
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
