import { onMounted, ref, toRefs, watch } from 'vue'
import useClassByFocus from '../../uses/useClassByFocus'
import useStyleList from '../../uses/useStyleList'

export default function useGo (
  axis,
  slides,
  props,
  context
) {
  const { selected } = toRefs(props)
  const propSelected = ref(props.selected)

  const classBlock = useClassByFocus(slides, 'status-block')
  const classOld = useClassByFocus(slides, 'status-old')
  const classSelected = useClassByFocus(slides, 'status-selected')

  const coordinates = useStyleList(axis, {
    top: '--_ma-top',
    left: '--_ma-left',
    width: '--_ma-width',
    height: '--_ma-height'
  }, 'px')

  const toGo = (selected = props.selected) => {
    if (selected) {
      classSelected.set(selected)
      propSelected.value = selected
    }
  }
  const update = async selected => {
    if (propSelected.value !== selected) {
      coordinates.set(slides.value?.[propSelected.value]?.getBoundingClientRect())
      classOld.set(propSelected.value)
      classBlock.set(selected)

      updateGo(selected)
    }
  }
  const updateGo = selected => requestAnimationFrame(() => {
    const block = axis.value.querySelector('.status-block')

    if (block && block.offsetHeight > 0) {
      toGo(selected)
    } else {
      updateGo(selected)
    }
  })

  const onTransitionend = ({ propertyName }, name) => {
    if (
      slides.value[name].classList.contains('status-old') &&
      propertyName === 'transform'
    ) {
      classOld.set()
      classBlock.set()

      context.emit('on-end')
    }
  }

  watch(selected, update)
  onMounted(toGo)

  return {
    propSelected,
    toGo,
    update,
    onTransitionend
  }
}
