import { useWatch } from '@/tool/use/useWatch'
import { getFileResult } from '@/tool/functions'
import { ref } from 'vue'

export const useIcon = function (icon) {
  let type

  const text = ref(undefined)
  const classIcon = ref({})
  const styleIcon = ref({})

  const getClassName = () => {
    switch (type) {
      case 'la':
        return `las ${icon.value}`
      case 'filled':
      case 'outlined':
      case 'round':
      case 'sharp':
      case 'two-tone':
      case 'material':
        return 'material-icons'
      default:
        return undefined
    }
  }
  const getStyleName = (image) => {
    let style

    if (image) {
      switch (type) {
        case 'image':
          style = { 'background-image': `url(${image})` }
          break
        case 'color':
          style = { 'background-color': image }
          break
      }
    }

    return style
  }

  const updateType = () => {
    const value = icon.value
    type = undefined

    if (value) {
      if (value instanceof File) {
        type = 'image'
      } else if (typeof value === 'string') {
        if (value.match(/\//)) {
          type = 'image'
        } else if (value.match(/^#/)) {
          type = 'color'
        } else {
          type = value.match(/^(la|filled|outlined|round|sharp|two-tone)-/)?.[1] || 'material'
        }
      }
    }
  }
  const updateText = () => {
    if ([
      'filled',
      'outlined',
      'round',
      'sharp',
      'two-tone',
      'material'
    ].indexOf(type) !== -1) {
      text.value = icon.value.replace(/^(filled|outlined|round|sharp|two-tone)-/, '')
    } else {
      text.value = undefined
    }
  }

  const image = useWatch(icon, async data => {
    updateType()
    updateText()

    const name = getClassName()

    classIcon.value = {
      [`type-${type}`]: type,
      [name]: name
    }

    data.value = icon.value instanceof File ? await getFileResult(icon.value) : icon.value
    styleIcon.value = getStyleName(data.value)
  })

  return {
    text,
    classIcon,
    styleIcon,
    image
  }
}
