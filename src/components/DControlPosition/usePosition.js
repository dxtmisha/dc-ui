export default function usePosition (
  id
) {
  const isDrop = item => item.classList.contains('cp-drop')
  const isPosition = item => item.classList.contains('cp-position')

  const getItemClick = target => target.closest(`.${id}.cp-click, .${id} .cp-click`)
  const getIndex = item => {
    let index

    document.querySelectorAll(`.${id}`).forEach((el, position) => {
      if (item === el) {
        index = position
      }
    })

    return index
  }
  const getSelection = () => {
    const values = []

    if (this.toSelection) {
      this.toSelection.forEach(item => values.push(item.dataset?.value))
    } else {
      values.push(this.active.dataset?.value)
    }

    return values
  }
}
