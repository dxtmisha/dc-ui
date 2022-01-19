import { toRefs } from 'vue'
import useWatch from './../../uses/useWatch'

export default function useTo (
  props,
  update
) {
  const {
    axis,
    transition
  } = toRefs(props)

  const propAxis = useWatch(axis, () => axis.value, ['init'])
  const propTransition = useWatch(transition, () => transition.value, ['init'])

  const toTop = selected => {
    propAxis.value = 'y'
    propTransition.value = 'back'
    update(selected)
  }
  const toRight = selected => {
    propAxis.value = 'x'
    propTransition.value = 'next'
    update(selected)
  }
  const toBottom = selected => {
    propAxis.value = 'y'
    propTransition.value = 'next'
    update(selected)
  }
  const toLeft = selected => {
    propAxis.value = 'x'
    propTransition.value = 'back'
    update(selected)
  }
  const toDown = selected => {
    propAxis.value = 'z'
    propTransition.value = 'back'
    update(selected)
  }
  const toUp = selected => {
    propAxis.value = 'z'
    propTransition.value = 'next'
    update(selected)
  }

  return {
    propAxis,
    propTransition,
    toTop,
    toRight,
    toBottom,
    toLeft,
    toDown,
    toUp
  }
}
