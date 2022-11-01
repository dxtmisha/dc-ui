import forEach from './../../functions/forEach'

export default function useSelection (
  id,
  position,
  square,
  itemActive,
  itemSelection
) {
  const getSelection = () => forEach(itemSelection.value || [itemActive.value], (item) => item?.dataset?.value)

  const findSelection = () => position.value.querySelectorAll(`.${id}.cp-active, .${id}.status-selected`)
  const goSelection = () => {
    if (itemActive.value.classList.contains('status-selected')) {
      let shift = 1
      const deg = 4
      const max = 4

      itemSelection.value = findSelection()
      itemSelection.value.forEach(item => {
        if (item !== itemActive.value) {
          const rect = item.getBoundingClientRect()

          item.style.setProperty('--_cp-width', `${rect.width}px`)
          item.style.setProperty('--_cp-height', `${rect.height}px`)
          item.style.setProperty('--_cp-shift', `-${(max * deg - shift * deg)}deg`)
          item.classList.add('cp-active', 'cp-selection')

          if (shift < max) {
            shift++
          } else {
            item.classList.add('cp-selection-more')
          }
        }
      })
    }
  }

  return {
    getSelection,
    goSelection
  }
}
