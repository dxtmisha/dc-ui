import { nextTick, provide, ref } from 'vue'
import EventControl from '../../classes/EventControl'
import getExp from './../../functions/getExp'
import getKey from './../../functions/getKey'
import goScroll from './../../functions/goScroll'

export default function useFocus (
  selected,
  object
) {
  let focusKey, resetSearch
  const menu = ref(undefined)
  const window = ref(undefined)
  const focus = ref(undefined)
  const search = ref(undefined)
  const menuOpen = ref('none')

  const getList = () => object.value.getFirst()
  const querySelector = selectors => menu.value?.$el.querySelector(selectors)
  const elementFocus = () => querySelector(`[data-value="${focus.value}"]`)

  provide('menuOpen', menuOpen)

  const setFocus = value => {
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
  const setSearch = key => {
    const list = getList()

    search.value = resetSearch ? search.value + key : key
    const exp = getExp(search.value, '^:value')

    clearTimeout(resetSearch)
    resetSearch = setTimeout(() => {
      resetSearch = undefined
    }, 2000)

    focusKey = list.findIndex(item => item.text.match(exp))
    focus.value = list?.[focusKey]?.value
    goScroll(elementFocus())
  }

  const eventBody = EventControl.init(document.body, async event => {
    if (
      ['INPUT', 'TEXTAREA'].indexOf(event.target.nodeName) === -1 &&
      !querySelector('.ls-menu .status-turn')
    ) {
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
            window.value.toggle(false)
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

      setTimeout(() => {
        menuOpen.value = 'flex'
        requestAnimationFrame(() => {
          goScroll(querySelector('.d-list-item.status-selected'))
        })
      }, 80)
    } else {
      focus.value = undefined

      requestAnimationFrame(() => {
        menuOpen.value = 'none'
      })
    }
  }

  return {
    menu,
    window,
    focus,
    search,
    opening
  }
}
