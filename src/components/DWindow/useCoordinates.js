import { nextTick, ref, watch } from 'vue'
import frame from '@/functions/frame'
import useStyle from '@/uses/useStyle'

export const getInnerPosition = function (
  inValue,
  outValue,
  length,
  innerLength
) {
  if (inValue + length <= innerLength) {
    return inValue
  } else if (outValue - length > 0) {
    return outValue - length
  } else {
    return 0
  }
}

export default function useCoordinates (
  id,
  modal,
  props,
  contextmenu,
  open
) {
  const top = ref(0)
  const right = ref(0)
  const bottom = ref(0)
  const left = ref(0)

  const x = useStyle(modal, '--_wn-x', 'px')
  const y = useStyle(modal, '--_wn-y', 'px')
  const clientX = useStyle(modal, '--_wn-cl-x', 'px', undefined, () => updateX())
  const clientY = useStyle(modal, '--_wn-cl-y', 'px', undefined, () => updateY())
  const originX = useStyle(modal, '--_wn-or-x')
  const originY = useStyle(modal, '--_wn-or-y')
  const minimum = useStyle(modal, '--_wn--cn-width', 'px')

  const updateX = () => {
    if (modal.value) {
      const rectRight = contextmenu.value ? clientX.value : right.value + (props.axis === 'x' ? props.indent : 0)
      const rectLeft = contextmenu.value ? clientX.value : left.value - (props.axis === 'x' ? props.indent : 0)

      if (props.axis === 'x') {
        x.set(getInnerPosition(rectRight, rectLeft, modal.value?.offsetWidth, window.innerWidth))
      } else {
        x.set(getInnerPosition(rectLeft, rectRight, modal.value?.offsetWidth, window.innerWidth))
      }
    }
  }
  const updateY = () => {
    if (modal.value) {
      const rectTop = contextmenu.value ? clientY.value : top.value - (props.axis === 'y' ? props.indent : 0)
      const rectBottom = contextmenu.value ? clientY.value : bottom.value + (props.axis === 'y' ? props.indent : 0)

      if (props.axis === 'y') {
        y.set(getInnerPosition(rectBottom, rectTop, modal.value?.offsetHeight, window.innerHeight))
      } else {
        y.set(getInnerPosition(rectTop, rectBottom, modal.value?.offsetHeight, window.innerHeight))
      }
    }
  }
  const update = async (control) => {
    await nextTick()
    updateX()
    updateY()

    requestAnimationFrame(() => {
      if (clientX.value === 0 && clientY.value === 0) {
        const rect = control.getBoundingClientRect()
        originX.set(`${(rect.left + (rect.width / 2)) - x.value}px`)
        originY.set(`${(rect.top + (rect.height / 2)) - y.value}px`)
      } else {
        originX.set(clientX.value ? `${clientX.value - x.value}px` : 'left')
        originY.set(clientY.value ? `${clientY.value - y.value}px` : 'top')
      }
    })
  }

  const watchPosition = () => {
    const control = document.querySelector(`.d-window__control.${id}`)

    if (open.value && control) {
      update(control).then()

      frame(
        () => {
          if (modal.value && getComputedStyle(modal.value).content === '"--MENU--"') {
            const rect = control.getBoundingClientRect()

            minimum.set(props.axis === 'on' ? rect.width : undefined)

            top.value = rect.top
            right.value = rect.right
            bottom.value = rect.bottom
            left.value = rect.left
          } else {
            top.value = 0
            left.value = 0
          }
        },
        () => open.value,
        () => {
          x.set(undefined)
          y.set(undefined)

          minimum.set(undefined)
          clientX.set(undefined)
          clientY.set(undefined)
          originX.set(undefined)
          originY.set(undefined)
        }
      )
    }
  }

  watch([right, left], updateX)
  watch([top, bottom], updateY)

  return {
    clientX,
    clientY,
    x,
    y,
    originX,
    originY,
    minimum,
    watchPosition
  }
}
