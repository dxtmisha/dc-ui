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

  const initBar = list => forEach(list, item => attrButton({
    props,
    items: item,
    attrs: {
      dense: true,
      ellipsis: false,
      iconAnimationShow: true
    }
  }))

  const propBar = useWatch(bar, () => initBar(bar.value), ['init'])
  const propBarAction = useWatch(barAction, () => initBar(barAction.value), ['init'])
  const propClose = initBar([{
    icon: iconClose,
    value: 'cancel'
  }])[0]

  return {
    propBar,
    propBarAction,
    propClose
  }
}
