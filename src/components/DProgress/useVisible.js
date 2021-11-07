import { onMounted, ref, toRefs, watch } from 'vue'

export const useVisible = function (props) {
  const {
    // Status
    visible,

    // Options
    delay
  } = toRefs(props)

  const move = ref(false)
  const statusVisible = ref(false)

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
  watch(statusVisible, (value) => {
    move.value = !value
  })

  onMounted(update)

  return {
    move,
    statusVisible,
    onAnimation
  }
}
