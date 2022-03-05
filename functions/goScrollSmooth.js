export default function goScrollSmooth (element, options) {
  const shift = options?.shift || 0
  const behavior = options?.behavior || 'smooth'

  if ('scrollIntoView' in element && !shift) {
    element.scrollIntoView({
      behavior,
      block: options?.block || 'start',
      inline: options?.inline || 'start'
    })
  } else if ('getBoundingClientRect' in element) {
    const top = (window?.screenY || window.pageYOffset) + element.getBoundingClientRect().top - shift

    if ('scrollTo' in window) {
      window.scrollTo({
        top,
        behavior
      })
    } else {
      window.scroll(0, top)
    }
  }
}
