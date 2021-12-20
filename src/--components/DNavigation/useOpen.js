import { onMounted, toRefs, watch } from 'vue'
import useClass from '@/--uses/useClass'
import useStyle from '@/--uses/useStyle'

export default function useOpen (
  navigation,
  body,
  props,
  context,
  toClick,
  set
) {
  const { open } = toRefs(props)

  const classShow = useClass(navigation, 'status-show')
  const classDesktop = useClass(navigation, 'status-desktop')
  const styleWidth = useStyle(navigation, '--_nv--ds-width', 'px')

  const isMobile = () => getComputedStyle(navigation.value).content === '"--MOBILE--"'

  const show = value => {
    if (isMobile()) {
      classShow.set(value)
    } else {
      styleWidth.set(value ? undefined : body.value.getBoundingClientRect().width)
      requestAnimationFrame(() => classDesktop.set(value))
    }
  }

  const onClose = ({ target }) => {
    if (
      target === navigation.value &&
      isMobile()
    ) {
      set(false)
      classShow.set(false)
      context.emit('on-close')
    }
  }

  toClick.value = ({ value }) => {
    classShow.set(false)

    if (value === 'close') {
      classDesktop.set(false)
    }

    context.emit('on-close')
  }

  watch(open, show)
  onMounted(() => classDesktop.set(open.value))

  return {
    show,
    onClose
  }
}
