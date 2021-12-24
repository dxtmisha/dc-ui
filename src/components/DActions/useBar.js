import { toRefs } from 'vue'
import forEach from '@/functions/forEach'
import attrButton from '@/components/DButton/attrButton'
import useWatch from '@/uses/useWatch'

export default function useBar (props) {
  const {
    bar,
    barAction
  } = toRefs(props)

  const initBar = (list, extra = {}) => {
    const bars = []

    forEach(list, item => bars.push(attrButton(
      props,
      {
        ...item,
        item,
        ellipsis: false
      },
      {
        ...item,
        class: 'd-actions__bar window-close',
        ...extra
      }
    )))

    return bars
  }

  const propBar = useWatch(bar, data => {
    data.value = initBar(bar.value)
  })
  const propBarAction = useWatch(barAction, data => {
    data.value = initBar(barAction.value, { class: 'd-actions__action' })
  })

  return {
    propBar,
    propBarAction
  }
}
