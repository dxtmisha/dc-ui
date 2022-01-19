import { toRefs } from 'vue'
import useClass from './../../uses/useClass'
import useWatch from './../../uses/useWatch'

export default function useVisible (
  progress,
  props
) {
  const { visible } = toRefs(props)
  let timeout

  const classMove = useClass(progress, 'status-move')
  const classVisible = useClass(
    progress,
    'status-visible',
    false,
    value => classMove.set(!value)
  )

  useWatch(visible, () => {
    clearTimeout(timeout)

    if (visible.value && props.delay) {
      timeout = setTimeout(() => classVisible.set(true), props.delay)
    } else {
      classVisible.set(visible.value)
    }
  }, ['mounted'])

  return ({ animationName }) => {
    if ([
      '__animate-linear--hidden',
      '__animate-circle--hidden'
    ].indexOf(animationName) !== -1) {
      classMove.set(false)
    }
  }
}
