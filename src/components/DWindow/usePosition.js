import { frame } from '@/uses/useControl'
import { getIdElement } from '@/uses/useElement'
import { ref, toRefs, watch } from 'vue'

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
  const window = ref(undefined)

  const contextmenu = ref(false)
  const clientX = ref(0)
  const clientY = ref(0)
  const top = ref(0)
  const right = ref(0)
  const bottom = ref(0)
  const left = ref(0)

  const getControl = () => document.querySelector(`.d-window__control.${id}`)
  const getControlRect = () => getControl()?.getBoundingClientRect()

  const updateOrigin = () => {
    if (clientX.value || clientY.value) {
      const coordinates = watchCoordinates()
      window.value.style.setProperty('--_wd-or-x', `${clientX.value - coordinates.x}px`)
      window.value.style.setProperty('--_wd-or-y', `${clientY.value - coordinates.y}px`)
    } else {
      window.value.style.setProperty('--_wd-or-x', 'left')
      window.value.style.setProperty('--_wd-or-y', 'top')
    }
  }
  const updateXY = () => {
    const coordinates = watchCoordinates()
    window.value.style.setProperty('--_wn-x', `${coordinates.x}px`)
    window.value.style.setProperty('--_wn-y', `${coordinates.y}px`)
  }
  const updateClientXY = () => {
    if (window.value) {
      window.value.style.setProperty('--_wn-cl-x', `${clientX.value}px`)
      window.value.style.setProperty('--_wn-cl-y', `${clientY.value}px`)
    }
  }

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
        x = getInnerPosition(position.right, position.left, window.value.offsetWidth, window.value.innerWidth)
        y = getInnerPosition(position.top, position.bottom, window.value.offsetHeight, window.value.innerHeight)
        break
      case 'y':
        x = getInnerPosition(position.left, position.right, window.value.offsetWidth, window.value.innerWidth)
        y = getInnerPosition(position.bottom, position.top, window.value.offsetHeight, window.value.innerHeight)
        break
      case 'on':
        x = getInnerPosition(position.right, position.left, window.value.offsetWidth, window.value.innerWidth)
        y = getInnerPosition(position.bottom, position.top, window.value.offsetHeight, window.value.innerHeight)
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
      updateClientXY()

      frame(() => {
        if (getComputedStyle(window.value).content === '"--MENU--"') {
          const rect = control.getBoundingClientRect()

          top.value = rect.top
          right.value = rect.right
          bottom.value = rect.bottom
          left.value = rect.left
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

  return {
    valueOpen,
    id,
    window,
    contextmenu,
    clientX,
    clientY,
    watchPosition
  }
}
