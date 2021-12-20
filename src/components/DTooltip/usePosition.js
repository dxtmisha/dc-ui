import { computed, nextTick, ref } from 'vue'
import useClass from '@/uses/useClass'
import useStyle from '@/uses/useStyle'

export default function usePosition (
  tooltip,
  props,
  context,
  id,
  open
) {
  let timeout
  const show = ref(false)

  const isText = computed(() => (props.text || 'default' in context.slots) && !props.disabled)
  const isShow = computed(() => (show.value || open.value) && isText.value)

  const classPreparation = useClass(tooltip, 'status-preparation')
  const classShow = useClass(tooltip, 'status-show')
  const classTop = useClass(tooltip, 'option-top')

  const styleX = useStyle(tooltip, '--_tt-left', 'px')
  const styleY = useStyle(tooltip, '--_tt-top', 'px')
  const styleShift = useStyle(tooltip, '--_tt-shift', 'px')

  const isTop = (rect, tooltipRect) => (props.top && rect.top - tooltipRect.height - props.indent >= 0) ||
    (rect.bottom + tooltipRect.height + props.indent > window.innerHeight)

  const updatePosition = () => {
    if (tooltip.value) {
      const rect = document.querySelector(`.d-tooltip__control.${id}`).getBoundingClientRect()
      const tooltipRect = tooltip.value.getBoundingClientRect()
      const top = isTop(rect, tooltipRect)
      const x = rect.left + (rect.width / 2) - (tooltipRect.width / 2)
      const y = top ? rect.top - tooltipRect.height - props.indent : rect.bottom + props.indent

      let shift = 0

      if (x < 0) {
        shift = 0 - x
      } else if (x + tooltipRect.width > window.innerWidth) {
        shift = window.innerWidth - (x + tooltipRect.width)
      }

      classTop.set(top)
      styleX.set(x)
      styleY.set(y)
      styleShift.set(shift)
    }
  }
  const toggle = async (value, go = false) => {
    if (
      open.value !== value &&
      isText.value &&
      !props.disabled
    ) {
      clearTimeout(timeout)
      open.value = value

      if (value) {
        show.value = true

        await nextTick()
        updatePosition()

        classPreparation.set(true)
        timeout = setTimeout(() => classShow.set(true), go ? 0 : props.delay)
      } else {
        classPreparation.set(false)
        classShow.set(false)

        timeout = setTimeout(() => {
          show.value = false
        }, 250)
      }
    }
  }

  return {
    isShow,
    toggle
  }
}
