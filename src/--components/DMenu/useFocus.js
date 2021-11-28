import EventControl from '@/classes/EventControl'
import { nextTick, ref } from 'vue'
import { getKey, goScroll } from '@/--tool/functions'

export const useFocus = function (
  selected,
  object
) {
  let focusKey
  let resetSearch
  const elWindow = ref(undefined)
  const elMenu = ref(undefined)
  const focus = ref(undefined)
  const search = ref(undefined)

  const getList = () => object.value.getFirst()
  const querySelector = (selectors) => elMenu.value?.$el.querySelector(selectors)
  const elementFocus = () => querySelector(`[data-value="${focus.value}"]`)

  const setFocus = (value) => {
    const list = getList()
    const length = list.length

    if (value >= length) {
      focusKey = 0
    } else if (value < 0) {
      focusKey = length - 1
    } else {
      focusKey = value
    }

    focus.value = list?.[focusKey]?.value
    goScroll(elementFocus())
  }
  const setSearch = (key) => {
    const list = getList()

    search.value = resetSearch ? search.value + key : key

    clearTimeout(resetSearch)
    resetSearch = setTimeout(() => {
      resetSearch = undefined
    }, 2000)

    focusKey = list.findIndex(item => item.text.match(new RegExp(`^${search.value}`, 'ig')))
    focus.value = list?.[focusKey]?.value
    goScroll(elementFocus())
  }

  const eventBody = EventControl.init(document.body, async (event) => {
    if (!querySelector('.ls-menu .status-turn')) {
      if (event.type === 'keypress') {
        setSearch(event.key)
      } else {
        const key = event.code || event.key || event.keyCode

        switch (key) {
          case 'ArrowUp':
          case 38:
            event.preventDefault()
            setFocus(focusKey - 1)
            break
          case 'ArrowDown':
          case 40:
            event.preventDefault()
            setFocus(focusKey + 1)
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
            elWindow.value.toggle(false)
            break
        }
      }
    }
  }, ['keydown', 'keypress'])

  const opening = async (open) => {
    eventBody.toggle(open)

    if (open) {
      focusKey = getKey(getList(), selected.value)
      await nextTick()
      goScroll(querySelector('.d-list-item.status-selected'))
    } else {
      focus.value = undefined
    }
  }

  return {
    elWindow,
    elMenu,
    focus,
    search,
    opening
  }
}
