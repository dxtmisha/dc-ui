import { onMounted, watch } from 'vue'
import toggleArrayValue from '@/functions/toggleArrayValue'

export default function useItem (
  id,
  selection,
  props,
  context,
  propSelected
) {
  let lastSelection

  const getItems = () => selection.value.querySelectorAll(`.${id}`)
  const getTarget = target => target.closest(`.${id}`)
  const getClick = target => target.closest(`.${id}.cs-click, .${id} .cs-click`)
  const getByValue = value => selection.value.querySelector(`.${id}[data-value="${value}"]`)

  const setSelected = (value, event = true) => {
    propSelected.value = Array.isArray(value) ? value : [value]
    updateSelection()

    if (event) {
      emit()
    }
  }
  const setLastSelection = value => {
    lastSelection = getByValue(value)
  }
  const reset = (event = true) => {
    propSelected.value = []

    if (event) {
      emit()
    }
  }

  const updateSelection = (values = propSelected.value) => getItems().forEach(item => {
    item.classList.toggle('status-selected', values.indexOf(item.dataset?.value) !== -1)
  })

  const selectionByClick = value => {
    setLastSelection(value)
    propSelected.value = [value]
  }
  const selectionByMeta = value => {
    toggleArrayValue(propSelected.value, value)
    updateSelection()
  }
  const selectionByShift = value => {
    if (
      lastSelection &&
      lastSelection.dataset?.value !== value
    ) {
      let start
      let end

      propSelected.value = []

      getItems().forEach(item => {
        if (!end) {
          if (
            item === lastSelection ||
            item.dataset?.value === value
          ) {
            if (start) {
              end = true
            } else {
              start = true
            }
          }

          if (start) {
            propSelected.value.push(item.dataset?.value)
          }
        }
      })
    } else {
      selectionByClick(value)
    }
  }

  const emit = () => requestAnimationFrame(() => context.emit('on-selected', {
    items: getItems(),
    itemsSelected: selection.value.querySelectorAll(`.${id}.status-selected`),
    selected: propSelected.value,
    focus: propSelected.value[propSelected.value.length - 1]
  }))

  const onClick = ({
    ctrlKey,
    metaKey,
    shiftKey,
    target
  }) => {
    if (!props.disabled) {
      const click = getClick(target)

      if (click) {
        if (click.classList.contains('cp-go')) {
          click.classList.remove('cp-go')
        } else {
          const value = getTarget(target)?.dataset?.value
          window.getSelection().removeAllRanges()

          if (shiftKey) {
            selectionByShift(value)
          } else if (ctrlKey || metaKey || props.active) {
            selectionByMeta(value)
          } else {
            selectionByClick(value)
          }

          emit()
        }
      }
    }
  }

  watch(propSelected, updateSelection)
  onMounted(updateSelection)

  return {
    getItems,
    setSelected,
    reset,
    updateSelection,
    emit,
    onClick
  }
}
