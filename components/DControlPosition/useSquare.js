import { ref } from 'vue'
import useClass from '../../uses/useClass'
import useStyleList from '../../uses/useStyleList'

export default function useSquare (
  id,
  position,
  square
) {
  let old

  const route = ref(undefined)
  const classBody = useClass(ref(document.body), 'd-control-position__body')
  const classSquare = useClass(square, 'cp-show')
  const styleSquare = useStyleList(square, {
    width: 'width',
    height: 'height',
    marginTop: 'margin-top',
    marginRight: 'margin-right',
    marginBottom: 'margin-bottom',
    marginLeft: 'margin-left'
  })

  const isRouteIndex = (square, item) => {
    let route

    position.value.querySelectorAll(`.${id}, .cp-show`).forEach((el) => {
      if (route === undefined) {
        if (el === item) {
          route = true
        } else if (el === square) {
          route = false
        }
      }
    })

    return route
  }
  const goSquare = (item = undefined, reset = false) => {
    if (item) {
      const style = reset ? old : getComputedStyle(item)

      if (classSquare.value === false) {
        old = {
          width: style.width,
          height: style.height,
          marginTop: style.marginTop,
          marginRight: style.marginRight,
          marginBottom: style.marginBottom,
          marginLeft: style.marginLeft
        }
      }

      route.value = isRouteIndex(square.value, item)
      item.parentElement.insertBefore(square.value, route.value ? item : item.nextElementSibling)

      styleSquare.set(style)
      classSquare.set(true)
      classBody.set(true)
    } else {
      classBody.set(false)
      classSquare.set(false)
      styleSquare.reset()

      position.value.insertBefore(square.value, undefined)
    }
  }

  return {
    route,
    goSquare
  }
}
