import forEach from '@/functions/forEach'
import useClass from '@/uses/useClass'

export default function useCell (cell) {
  const classFreeze = useClass(cell, 'status-freeze')
  const classGo = useClass(cell, 'status-go')

  let time

  const update = async callback => {
    const items = cell.value.children

    forEach(items, item => {
      item.__size_original = item.getBoundingClientRect()
    })

    await callback()

    requestAnimationFrame(() => {
      forEach(items, item => {
        if ('__size_original' in item) {
          const rect = item.getBoundingClientRect()

          item.style.setProperty('--mc-top', `${item.__size_original.top - rect.top}px`)
          item.style.setProperty('--mc-left', `${item.__size_original.left - rect.left}px`)
          item.style.setProperty('--mc-width', `${rect.width}px`)
          item.style.setProperty('--mc-width-to', `${item.__size_original.width}px`)
          item.style.setProperty('--mc-height', `${rect.height}px`)
          item.style.setProperty('--mc-height-to', `${item.__size_original.height}px`)

          item.classList.add('d-motion-cell__item')
        }
      })

      classFreeze.set(true)

      requestAnimationFrame(() => {
        classGo.set(true)
      })
    })
  }

  const onTransition = event => {
    if (
      event.propertyName === 'transform' &&
      event.target.parentElement.classList.contains('d-motion-cell__item')
    ) {
      event.target.parentElement.classList.remove('d-motion-cell__item')

      if (!time) {
        time = true
        requestAnimationFrame(() => {
          classFreeze.set(false)
          classGo.set(false)
          time = false
        })
      }
    }
  }

  return {
    update,
    onTransition
  }
}
