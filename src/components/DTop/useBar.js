import { toRefs } from 'vue'
import forEach from '@/functions/forEach'
import attrButton from '@/components/DButton/attrButton'
import useWatch from '@/uses/useWatch'

export default function useBar (props) {
  const {
    bar,
    barAction,
    iconClose
  } = toRefs(props)

  const initBar = (list, extra = {}) => {
    const bars = []

    forEach(list, item => bars.push(attrButton(
      props,
      item,
      {
        class: 'd-top__bar window-close',
        lowercase: true,
        dense: true,
        ...extra
      }
    )))

    return bars
  }

  const propBar = useWatch(bar, data => {
    data.value = initBar(bar.value)
  })
  const propBarAction = useWatch(barAction, data => {
    data.value = initBar(barAction.value, { iconAnimationShow: true })
  })
  const propClose = initBar(
    [{ icon: iconClose }],
    {
      class: 'window-close',
      value: 'cancel'
    }
  )[0]

  return {
    propBar,
    propBarAction,
    propClose
  }
}
