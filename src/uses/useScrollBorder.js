import { ref } from 'vue'
import { useClass } from '@/uses/useClass'
import { useWatch } from '@/uses/useWatch'

export const useScrollBorder = function (border) {
  const scroll = ref(undefined)

  const top = useClass(scroll, 'status-top')
  const bottom = useClass(scroll, 'status-bottom')

  const update = () => {
    const element = scroll.value

    if (element) {
      top.value = element.scrollTop !== 0
      bottom.value = element.scrollTop !== element.scrollHeight - element.clientHeight
    }
  }

  const onScroll = (event) => {
    if (border.value && event.target === scroll.value) {
      update()
    }
  }

  const classScrollBorder = useWatch(border, data => {
    update()

    data.value = {
      'd-scrollbar-border': border.value,
      'status-top': top.value,
      'status-bottom': bottom.value
    }
  })

  return {
    scroll,
    classScrollBorder,
    onScroll
  }
}
