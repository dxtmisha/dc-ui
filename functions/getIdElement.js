let ids = 1
export default function getIdElement (
  element = undefined,
  selector = undefined
) {
  if (element) {
    if (!element.id) {
      element.setAttribute('id', `id-${ids++}`)
    }

    return selector !== undefined ? `#${element.id}${selector}`.trim() : element.id
  } else {
    return ids++
  }
}
