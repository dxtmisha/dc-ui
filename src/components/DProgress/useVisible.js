import { onMounted, toRefs, watch } from 'vue'
import useClass from '@/uses/useClass'

export default function useVisible (
  progress,
  props
) {
  let timeout

  const { visible } = toRefs(props)

  const classMove = useClass(progress, 'status-move')
  const classVisible = useClass(
    progress,
    'status-visible',
    false,
    value => classMove.set(!value)
  )

  const onAnimation = ({ animationName }) => {
    if ([
      '__animate-linear--hidden',
      '__animate-circle--hidden'
    ].indexOf(animationName) !== -1) {
      classMove.set(false)
    }
  }

  const update = () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => classVisible.set(visible.value), visible.value ? props.delay : 0)
  }

  watch(visible, update)
  onMounted(update)

  return { onAnimation }
}
