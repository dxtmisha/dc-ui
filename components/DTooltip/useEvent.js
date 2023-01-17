export default function useEvent (
  id,
  open,
  toggle
) {
  let next = false
  let timeout

  const onClick = () => {
    requestAnimationFrame(() => {
      if (!next) {
        toggle(!open.value, true)
        next = false
      }
    })
  }

  const onMouseover = ({ target }) => {
    clearTimeout(timeout)
    next = true

    requestAnimationFrame(() => {
      toggle(!!target.closest(`.${id}`))
      timeout = setTimeout(() => {
        next = false
      }, 600)
    })
  }
  const onMouseout = ({ relatedTarget }) => toggle(!!relatedTarget?.closest(`.${id}`))

  return {
    onClick,
    onMouseover,
    onMouseout
  }
}
