import EventControl from '@/classes/EventControl'
import { computed, nextTick, ref } from 'vue'
import { getKey, goScroll } from '@/dcUi'

export const useFocus = function (
  context,
  objectList,
  selected,
  open
) {
  const menu = ref(undefined)
  const list = ref(undefined)
  const focus = ref(undefined)

  const getList = () => objectList.value.getFirst()
  const querySelector = (selectors) => list.value.$el.querySelector(selectors)

  const focusValue = computed(() => getList()?.[focus.value]?.value)
  const elementFocus = () => querySelector(`[data-value="${focusValue.value}"]`)
  const elementSelect = () => querySelector('.d-list-item.status-selected')

  const setFocus = (value) => {
    const length = getList().length

    if (value >= length) {
      focus.value = 0
    } else if (value < 0) {
      focus.value = length - 1
    } else {
      focus.value = value
    }

    goScroll(elementFocus())
  }
  const updateFocus = async () => {
    focus.value = getKey(getList(), selected.value)
    await nextTick()
    goScroll(elementFocus())
  }

  const eventBody = EventControl.init(document.body, async (event) => {
    if (!querySelector('.ls-menu .status-turn')) {
      const key = event.code || event.key || event.keyCode

      if (focus.value === undefined) {
        await updateFocus()
      }

      switch (key) {
        case 'ArrowUp':
        case 38:
          event.preventDefault()
          setFocus(focus.value - 1)
          break
        case 'ArrowDown':
        case 40:
          event.preventDefault()
          setFocus(focus.value + 1)
          break
        case 'Enter':
        case 'Space':
        case 'ArrowRight':
        case ' ':
        case 13:
        case 32:
        case 39:
          event.preventDefault()
          elementFocus()?.click()
          break
        case 'ArrowLeft':
        case 37:
          event.preventDefault()
          open.value = false
          break
      }
    }
  }, ['keydown'])

  const focusGo = async () => {
    focus.value = undefined
    eventBody.toggle(open.value)

    if (open.value) {
      await nextTick()
      goScroll(elementSelect())
    }
  }

  return {
    menu,
    list,
    focusValue,
    focusGo
  }
}
