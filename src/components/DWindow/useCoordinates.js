import { nextTick, ref } from 'vue'
import { frame } from '@/tool/functions'
import { useStyle } from '@/uses/useStyle'
import { useWatch } from '@/uses/useWatch'

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

export const useCoordinates = function (
  id,
  modal,
  contextmenu,
  open,
  axis,
  indent
) {
  const top = ref(0)
  const right = ref(0)
  const bottom = ref(0)
  const left = ref(0)

  const clientX = useStyle(modal, '--_wn-cl-x', 'px')
  const clientY = useStyle(modal, '--_wn-cl-y', 'px')
  const originX = useStyle(modal, '--_wn-or-x')
  const originY = useStyle(modal, '--_wn-or-y')
  const minimum = useStyle(modal, '--_wn--cn-width', 'px')

  const updateX = data => {
    if (modal.value) {
      const rectRight = contextmenu.value ? clientX.value : right.value + (axis.value === 'x' ? indent.value : 0)
      const rectLeft = contextmenu.value ? clientX.value : left.value - (axis.value === 'x' ? indent.value : 0)

      if (axis.value === 'x') {
        data.value = getInnerPosition(rectRight, rectLeft, modal.value?.offsetWidth, window.innerWidth)
      } else {
        data.value = getInnerPosition(rectLeft, rectRight, modal.value?.offsetWidth, window.innerWidth)
      }
    }
  }
  const updateY = data => {
    if (modal.value) {
      const rectTop = contextmenu.value ? clientY.value : top.value - (axis.value === 'y' ? indent.value : 0)
      const rectBottom = contextmenu.value ? clientY.value : bottom.value + (axis.value === 'y' ? indent.value : 0)

      if (axis.value === 'y') {
        data.value = getInnerPosition(rectBottom, rectTop, modal.value?.offsetHeight, window.innerHeight)
      } else {
        data.value = getInnerPosition(rectTop, rectBottom, modal.value?.offsetHeight, window.innerHeight)
      }
    }
  }
  const update = async (control) => {
    await nextTick()
    updateX(x)
    updateY(y)

    requestAnimationFrame(() => {
      if (clientX.value === 0 && clientY.value === 0) {
        const rect = control.getBoundingClientRect()
        originX.value = `${(rect.left + (rect.width / 2)) - x.value}px`
        originY.value = `${(rect.top + (rect.height / 2)) - y.value}px`
      } else {
        originX.value = clientX.value ? `${clientX.value - x.value}px` : 'left'
        originY.value = clientY.value ? `${clientY.value - y.value}px` : 'top'
      }
    })
  }

  const x = useWatch([
    clientX,
    right,
    left
  ], updateX, [])
  const y = useWatch([
    clientY,
    top,
    bottom
  ], updateY, [])

  useStyle(modal, '--_wn-x', 'px', x)
  useStyle(modal, '--_wn-y', 'px', y)

  const watchPosition = () => {
    const control = document.querySelector(`.d-window__control.${id}`)

    update(control).then()

    if (open.value && control) {
      frame(
        () => {
          if (modal.value && getComputedStyle(modal.value).content === '"--MENU--"') {
            const rect = control.getBoundingClientRect()

            minimum.value = axis.value === 'on' ? rect.width : undefined
            top.value = rect.top
            right.value = rect.right
            bottom.value = rect.bottom
            left.value = rect.left
          } else {
            top.value = 0
          }
        },
        () => open.value,
        () => {
          clientX.value = undefined
          clientY.value = undefined
          originX.value = undefined
          originY.value = undefined
          minimum.value = undefined

          x.value = undefined
          y.value = undefined
        }
      )
    }
  }

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
