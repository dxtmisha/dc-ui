import { onMounted, ref, toRefs, watch } from 'vue'

export const useVisible = function (props) {
  const {
    // Status
    visible,

    // Options
    delay
  } = toRefs(props)

  const progress = ref(undefined)
  const move = ref(false)
  const statusVisible = ref(false)

  const classMove = (value) => progress.value?.classList.toggle('status-move', value)
  const classVisible = (value) => progress.value?.classList.toggle('status-visible', value)

  const update = () => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      statusVisible.value = visible.value
      timeout = undefined
    }, visible.value ? delay.value : 0)
  }

  const onAnimation = ({ animationName }) => {
    if ([
      '__animate-linear--hidden',
      '__animate-circle--hidden'
    ].indexOf(animationName) !== -1) {
      move.value = false
    }
  }

  let timeout

  watch(visible, update)
  watch(move, (value) => classMove(value))
  watch(statusVisible, (value) => {
    move.value = !value
    classVisible(value)
  })

  onMounted(update)

  return {
    progress,
    onAnimation
  }
}
