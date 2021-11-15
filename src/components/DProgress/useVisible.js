import { onMounted, ref, watch } from 'vue'
import { useClass } from '@/tool/use/useClass'

export const useVisible = function (
  visible,
  delay
) {
  let timeout

  const progress = ref(undefined)

  const classMove = useClass(progress, 'status-move')
  const classVisible = useClass(progress, 'status-visible', value => {
    classMove.value = !value
  })

  const onAnimation = ({ animationName }) => {
    if ([
      '__animate-linear--hidden',
      '__animate-circle--hidden'
    ].indexOf(animationName) !== -1) {
      classMove.value = false
    }
  }

  const update = () => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      classVisible.value = visible.value
    }, visible.value ? delay.value : 0)
  }

  watch(visible, update)
  onMounted(update)

  return {
    progress,
    onAnimation
  }
}
