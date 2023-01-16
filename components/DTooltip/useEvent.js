export default function useEvent (
  id,
  open,
  toggle
) {
  const onClick = (event) => {
    console.log('event', event)
    toggle(!open.value, true)
  }
  const onMouseover = ({ target }) => requestAnimationFrame(() => toggle(!!target.closest(`.${id}`)))
  const onMouseout = ({ relatedTarget }) => toggle(!!relatedTarget?.closest(`.${id}`))

  return {
    onClick,
    onMouseover,
    onMouseout
  }
}
