import { ref, toRefs, watch } from 'vue'
import { frame, getIdElement } from '@/dcUi'

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

export const usePosition = function (props) {
  const {
    // Options
    axis,
    indent
  } = toRefs(props)

  const valueOpen = ref(false)

  const id = `w--${getIdElement()}`
  const modal = ref(undefined)

  const contextmenu = ref(false)
  const clientX = ref(0)
  const clientY = ref(0)
  const top = ref(0)
  const right = ref(0)
  const bottom = ref(0)
  const left = ref(0)
  const widthControl = ref(0)

  const getControl = () => document.querySelector(`.d-window__control.${id}`)
  const getControlRect = () => getControl()?.getBoundingClientRect()

  const updateOrigin = () => {
    if (clientX.value || clientY.value) {
      const coordinates = watchCoordinates()
      modal.value.style.setProperty('--_wd-or-x', `${clientX.value - coordinates.x}px`)
      modal.value.style.setProperty('--_wd-or-y', `${clientY.value - coordinates.y}px`)
    } else {
      modal.value.style.setProperty('--_wd-or-x', 'left')
      modal.value.style.setProperty('--_wd-or-y', 'top')
    }
  }
  const updateXY = () => {
    const coordinates = watchCoordinates()
    modal.value.style.setProperty('--_wn-x', `${coordinates.x}px`)
    modal.value.style.setProperty('--_wn-y', `${coordinates.y}px`)
  }
  const updateClientXY = () => {
    if (modal.value) {
      modal.value.style.setProperty('--_wn-cl-x', `${clientX.value}px`)
      modal.value.style.setProperty('--_wn-cl-y', `${clientY.value}px`)
    }
  }
  const updateControl = () => modal.value.style.setProperty('--wn__cn-width', `${widthControl.value}px`)

  const watchRect = () => {
    if (contextmenu.value) {
      return {
        top: clientY.value,
        right: clientX.value,
        bottom: clientY.value,
        left: clientX.value
      }
    } else {
      const rect = getControlRect()

      return {
        top: rect.top - (axis.value === 'y' ? indent.value : 0),
        right: rect.right + (axis.value === 'x' ? indent.value : 0),
        bottom: rect.bottom + (axis.value === 'y' ? indent.value : 0),
        left: rect.left - (axis.value === 'x' ? indent.value : 0)
      }
    }
  }
  const watchCoordinates = () => {
    const position = watchRect()
    let x, y

    switch (axis.value) {
      case 'x':
        x = getInnerPosition(position.right, position.left, modal.value.offsetWidth, window.innerWidth)
        y = getInnerPosition(position.top, position.bottom, modal.value.offsetHeight, window.innerHeight)
        break
      case 'y':
        x = getInnerPosition(position.left, position.right, modal.value.offsetWidth, window.innerWidth)
        y = getInnerPosition(position.bottom, position.top, modal.value.offsetHeight, window.innerHeight)
        break
      case 'on':
        x = getInnerPosition(position.left, position.right, modal.value.offsetWidth, window.innerWidth)
        y = getInnerPosition(position.top, position.bottom, modal.value.offsetHeight, window.innerHeight)
        break
    }

    return {
      x,
      y
    }
  }
  const watchPosition = () => {
    const control = getControl()

    if (valueOpen.value && control) {
      updateOrigin()
      updateXY()
      updateClientXY()

      frame(() => {
        if (modal.value && getComputedStyle(modal.value).content === '"--MENU--"') {
          const rect = control.getBoundingClientRect()

          top.value = rect.top
          right.value = rect.right
          bottom.value = rect.bottom
          left.value = rect.left
          widthControl.value = rect.width
        }
      }, () => valueOpen.value)
    }
  }

  watch([
    top,
    right,
    bottom,
    left
  ], updateXY)
  watch([
    clientX,
    clientY
  ], updateClientXY)
  watch(widthControl, updateControl)

  return {
    valueOpen,
    id,
    modal,
    contextmenu,
    clientX,
    clientY,
    watchPosition
  }
}
