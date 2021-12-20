import useStyleList from '@/uses/useStyleList'

export default function usePosition (
  id,
  position,
  square,
  itemActive,
  itemSelection,
  itemStart,
  itemGo,
  client,
  emit,
  goSquare,
  resetDrop
) {
  const stylePosition = useStyleList(position, {
    x: '--_cp-x',
    y: '--_cp-y'
  }, 'px')

  const isPosition = item => item.classList.contains('cp-position')
  const getClick = target => target.closest(`.${id}.cp-click, .${id} .cp-click`)
  const findItem = points => {
    let item

    points.forEach(el => {
      if (
        !item &&
        el.classList.contains(id) &&
        el.classList.contains('cp-active') === false &&
        el !== itemActive.value
      ) {
        item = el
      }
    })

    return item
  }

  const toDo = (x, y) => stylePosition.set({
    x: x - client.x,
    y: y - client.y
  })
  const insert = () => itemStart.value.forEach(item => square.value.parentElement.insertBefore(item, square.value))

  const toPosition = item => {
    if (!isPosition(item)) {
      resetPosition()
    } else {
      goSquare(item)
      itemGo.value = item
    }
  }
  const toNone = (go = false) => {
    if (
      (itemActive.value) &&
      (itemActive.value.classList.contains('cp-return') || go)
    ) {
      if (itemGo.value) {
        emit()

        if (
          !go &&
          !client.drop
        ) {
          insert()
        }
      }

      goSquare()
      itemStart.value.forEach(item => item?.classList.remove('cp-active', 'cp-go', 'cp-selection', 'cp-selection-more', 'cp-return'))

      itemActive.value = undefined
      itemSelection.value = undefined
      itemGo.value = undefined

      stylePosition.reset()
    }
  }
  const resetPosition = () => {
    if (
      itemGo.value &&
      isPosition(itemGo.value)
    ) {
      goSquare(itemActive.value, true)
      itemGo.value = undefined
    }
  }

  const returnActive = () => {
    const rect = position.value.getBoundingClientRect()
    const rectSquare = square.value.getBoundingClientRect()

    client.x = 0
    client.y = 0
    itemActive.value.classList.add('cp-return')

    toDo(rectSquare.left - rect.left, rectSquare.top - rect.top)
  }

  const go = (item, clientX, clientY) => {
    const rect = item.getBoundingClientRect()
    const rectPosition = position.value.getBoundingClientRect()

    client.x = clientX - rect.left
    client.y = clientY - rect.top
    client.drop = false

    itemActive.value = item

    toDo(clientX - rectPosition.left, clientY - rectPosition.top)

    goSquare(item)
    item.style.setProperty('--_cp-width', `${rect.width}px`)
    item.style.setProperty('--_cp-height', `${rect.height}px`)
    item.classList.add('cp-active', 'cp-go')
  }
  const stop = () => {
    if (itemActive.value) {
      if (!itemGo.value) {
        returnActive()
      } else if (client.drop) {
        resetDrop()
        toNone(true)
      } else {
        returnActive()
      }
    }
  }

  return {
    getClick,
    findItem,
    toDo,
    toPosition,
    toNone,
    resetPosition,
    go,
    stop
  }
}
