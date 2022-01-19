import { ref, toRefs, watch } from 'vue'
import createImage from './../../functions/createImage'
import useWatch from './../../uses/useWatch'

export default function useIcon (props, context) {
  let type

  const {
    icon,
    coordinator,
    zoom,
    x,
    y
  } = toRefs(props)

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
  const getStyleByImage = image => {
    let zoom
    let x = props.x
    let y = props.y

    if (props.coordinator) {
      const height = 100 - props.coordinator?.[2] - props.coordinator?.[0]
      const width = 100 - props.coordinator?.[1] - props.coordinator?.[3]

      zoom = image.height < image.width ? `auto ${100 / height * 100}%` : `${100 / width * 100}% auto`
      x = props.coordinator?.[3] + (width / 2) + '%'
      y = props.coordinator?.[0] + (height / 2) + '%'
    } else {
      zoom = image.height < image.width ? `auto ${props.zoom}` : `${props.zoom} auto`
    }

    return {
      'background-image': `url(${image.src})`,
      'background-size': zoom,
      'background-position-x': x,
      'background-position-y': y
    }
  }
  const getStyleName = image => {
    let style

    if (image) {
      switch (type) {
        case 'image':
          style = getStyleByImage(image)
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

    classIcon.value = { [`type-${type}`]: type }

    if (name) {
      classIcon.value[name] = true
    }

    if (type === 'image') {
      const image = await createImage(icon.value)

      context.emit('on-load', image)

      data.value = image
      styleIcon.value = getStyleName(image)
    } else {
      data.value = undefined
      styleIcon.value = getStyleName(icon.value)
    }
  })

  watch([
    coordinator,
    zoom,
    x,
    y
  ], async () => {
    if (image.value) {
      styleIcon.value = getStyleName(image.value)
    }
  })

  return {
    text,
    classIcon,
    styleIcon,
    image
  }
}
