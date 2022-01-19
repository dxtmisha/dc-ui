import { onMounted, onUnmounted, onUpdated, ref, toRefs } from 'vue'
import EventControl from '../../classes/EventControl'

export default function useAppearance (
  images,
  props,
  propList
) {
  const { appearance } = toRefs(props)

  const even = ref(false)
  let event, timeout

  const getWidth = el => parseInt(el.dataset.width || '1')
  const getLine = () => {
    const data = {}
    const values = []

    propList.value.forEach(item => {
      const el = images.value.querySelector(`.d-images-item[data-value="${item.value}"]`)
      const rect = el.getBoundingClientRect()
      const size = Math.ceil(rect.top + rect.height / 2)

      if (!(size in data)) {
        data[size] = []
      }

      data[size].push({
        el,
        item
      })
    })

    Object.keys(data).forEach(index => values.push(data[index]))
    return values
  }

  const resizeWoven = () => requestAnimationFrame(() => {
    const list = getLine()
    let turn = false
    let max

    list.forEach(items => {
      turn = !turn
      items.forEach(({ el }) => {
        el.classList.toggle('option-turn', turn)
      })

      if (max === undefined) {
        max = items.length
      }
    })

    even.value = max % 2 === 0
  })

  const masonryHorizontal = () => {
    images.value.querySelectorAll('.d-images-item').forEach(el => el.style.removeProperty('--it-grow'))
    requestAnimationFrame(() => {
      const list = getLine()
      const columns = []
      let max = 0

      list.forEach(items => {
        let column = 0
        items.forEach(({ el }) => {
          column += getWidth(el)
        })

        if (max < column) {
          max = column
        }

        columns.push(column)
      })

      list.forEach((items, index) => {
        let min = max - columns[index]
        const grow = Math.ceil(min / items.length)

        items.forEach(({ el }) => {
          let value = 0

          if (min >= grow) {
            value = grow
            min -= grow
          } else if (min > 0) {
            value = min
            min = 0
          }

          if (value) {
            el.style.setProperty('--it-grow', value)
          }
        })
      })
    })
  }

  const masonryVertical = () => {
    images.value.querySelectorAll('.d-images-item').forEach(el => el.style.removeProperty('--it-grow'))
    requestAnimationFrame(() => {
      images.value.querySelectorAll('.d-images-item').forEach(item => {
        const height = parseInt(item.dataset.height)
        const minHeight = parseFloat(getComputedStyle(item).minHeight.replace('px', ''))

        if (item.scrollHeight > minHeight + 4) {
          item.style.setProperty('--it-grow', Math.round(item.scrollHeight / (minHeight / height)))
        }
      })
    })
  }

  const resize = () => {
    switch (appearance.value) {
      case 'woven':
        resizeWoven()
        break
      case 'masonry-horizontal':
        masonryHorizontal()
        break
      case 'masonry-vertical':
        masonryVertical()
        break
    }
  }

  const update = () => {
    if (
      images.value &&
      [
        'woven',
        'masonry-horizontal',
        'masonry-vertical'
      ].indexOf(appearance.value) !== -1
    ) {
      if (!event) {
        event = EventControl.init(window, () => {
          clearTimeout(timeout)

          timeout = setTimeout(resize, 320)
        }, ['resize']).go()
      }

      resize()
    } else if (event) {
      event.stop()
      event = undefined
    }
  }

  onMounted(update)
  onUpdated(update)
  onUnmounted(() => {
    if (event) {
      event.stop()
    }
  })

  return {
    even,
    update
  }
}
