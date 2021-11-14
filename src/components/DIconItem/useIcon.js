import { useWatch } from '@/tool/use/useWatch'
import { getFileResult } from '@/tool/functions'
import { ref } from 'vue'

export const useIcon = function (icon) {
  const type = ref(undefined)
  const text = ref(undefined)
  const classIcon = ref(undefined)

  const updateType = () => {
    const value = icon.value

    if (value) {
      if (value instanceof File || value.match(/\//)) {
        type.value = 'image'
      } else if (value.match(/^#/)) {
        type.value = 'color'
      } else {
        type.value = value.match(/^(la|filled|outlined|round|sharp|two-tone)-/)?.[1] || 'material'
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
    ].indexOf(type.value) !== -1) {
      text.value = icon.value.replace(/^(filled|outlined|round|sharp|two-tone)-/, '')
    } else {
      text.value = undefined
    }
  }
  const updateClassIcon = () => {
    switch (type.value) {
      case 'la':
        classIcon.value = `las ${icon.value}`
        break
      case 'filled':
      case 'outlined':
      case 'round':
      case 'sharp':
      case 'two-tone':
      case 'material':
        classIcon.value = 'material-icons'
        break
      default:
        classIcon.value = undefined
        break
    }
  }

  const image = useWatch(icon, async data => {
    updateType()
    updateText()
    updateClassIcon()
    data.value = icon.value instanceof File ? await getFileResult(icon.value) : icon.value
  })

  return {
    type,
    text,
    classIcon,
    image
  }
}
