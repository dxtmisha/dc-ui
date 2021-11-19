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
  const querySelector = (selectors) => list.value?.$el.querySelector(selectors)

  const elementFocus = () => querySelector(`[data-value="${focusValue.value}"]`)






  return {
    menu,
    list,
    focusValue,
    focusGo
  }
}
