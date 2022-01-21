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

  const toGo = (selected = props.selected) => requestAnimationFrame(() => classSelected.set(selected))
  const update = selected => {
    coordinates.set(slides.value?.[propSelected.value]?.getBoundingClientRect())
    classBlock.set(selected)
    classOld.set(propSelected.value)

    requestAnimationFrame(() => {
      toGo(selected)
      propSelected.value = selected
    })
  }

  const onTransitionend = ({ propertyName }, name) => {
    if (
      slides.value[name].classList.contains('status-selected') &&
      propertyName === 'transform'
    ) {
      classOld.set()
      classBlock.set()

      context.emit('on-end')
    }
  }

  watch(selected, update)
  onMounted(() => toGo())

  return {
    propSelected,
    toGo,
    update,
    onTransitionend
  }
}
