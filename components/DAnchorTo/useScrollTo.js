export default function useScrollTo (props) {
  return element => {
    if ('scrollIntoView' in element && !props.shift) {
      element.scrollIntoView({
        behavior: props.behavior,
        block: props.block,
        inline: props.inline
      })
    } else if ('getBoundingClientRect' in element) {
      const top = (window?.screenY || window.pageYOffset) + element.getBoundingClientRect().top - props.shift

      if ('scrollTo' in window) {
        window.scrollTo({
          top,
          behavior: props.behavior
        })
      } else {
        window.scroll(0, top)
      }
    }
  }
}
