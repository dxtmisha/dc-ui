import { toRefs } from 'vue'
import forEach from './../../functions/forEach'
import attrButton from './../DButton/attrButton'
import useWatch from './../../uses/useWatch'

export default function useBar (props) {
  const {
    bar,
    barAction
  } = toRefs(props)

  const initBar = list => {
    const bars = []

    forEach(list, item => bars.push(attrButton({
      props,
      items: item,
      attrs: {
        item,
        ellipsis: false
      }
    })))

    return bars
  }

  const propBar = useWatch(bar, () => initBar(bar.value), ['init'])
  const propBarAction = useWatch(barAction, () => initBar(barAction.value), ['init'])

  return {
    propBar,
    propBarAction
  }
}
