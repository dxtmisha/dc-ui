import { onUnmounted, ref, toRefs, watch } from 'vue'
import createImage from './../../functions/createImage'
import useWatch from '../../uses/useWatch'
import ImageAdaptive from '../../classes/ImageAdaptive'

export default function useIcon (elementIcon, props, context) {
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
  let adaptive, adaptiveX, adaptiveY

  const getClassName = () => {
    switch (type) {
      case 'la':
        return `las ${icon.value}`
      case 'lab':
        return `lab ${icon.value.replace('lab-', 'la-')}`
      case 'filled':
      case 'outlined':
      case 'round':
      case 'sharp':
      case 'two-tone':
      case 'material':
        return 'material-icons'
      case 'public':
        return 'd-icon-item--public'
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
      const isObject = typeof props.icon === 'object'

      if (adaptiveX) {
        zoom = `${adaptiveX}% auto`
      } else if (adaptiveY) {
        zoom = `auto ${adaptiveY}%`
      } else if (props.zoom) {
        zoom = !props.zoom.match(/%$/)
          ? props.zoom
          : image.height < image.width ? `auto ${props.zoom}` : `${props.zoom} auto`
      } else if (isObject && props.icon?.zoom) {
        zoom = typeof props.icon.zoom === 'string'
          ? props.icon.zoom
          : image.height < image.width ? `auto ${props.icon.zoom}%` : `${props.icon.zoom}% auto`
      }

      if (Number.isFinite(props.icon?.x)) {
        x = `${props.icon.x}%`
      }

      if (Number.isFinite(props.icon?.y)) {
        y = `${props.icon.y}%`
      }
    }

    return {
      'background-image': `url("${image.src}")`,
      'background-size': zoom,
      'background-position-x': x,
      'background-position-y': y,
      '--adaptive-x': adaptiveX,
      '--adaptive-y': adaptiveY
    }
  }
  const getStyleName = image => {
    let style

    if (image) {
      switch (type) {
        case 'image':
          style = getStyleByImage(image)
          break
        case 'public':
          style = { 'mask-image': `url("${image}")` }
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
      if (
        value instanceof File ||
        typeof icon.value === 'object'
      ) {
        type = 'image'
      } else if (typeof value === 'string') {
        if (value.match(/\//)) {
          type = 'image'
        } else if (value.match(/^#/)) {
          type = 'color'
        } else if (value.match(/^@/)) {
          type = 'public'
        } else {
          type = value.match(/^(la|lab|filled|outlined|round|sharp|two-tone)-/)?.[1] || 'material'
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

    adaptive = false
    classIcon.value = { [`type-${type}`]: type }

    if (name) {
      classIcon.value[name] = true
    }

    if (type === 'image') {
      const image = await createImage(
        icon.value?.thumbnail ||
        icon.value?.file ||
        icon.value
      )

      if (icon.value?.adaptive) {
        ImageAdaptive.add(
          elementIcon,
          icon.value?.adaptive,
          icon.value?.adaptiveX,
          icon.value?.adaptiveY,
          image,
          (x, y) => {
            adaptiveX = x
            adaptiveY = y
            styleIcon.value = getStyleName(image)
          }
        )

        adaptive = true
        adaptiveX = icon.value?.adaptive === 'X' ? 100 : undefined
        adaptiveY = icon.value?.adaptive === 'Y' ? 100 : undefined
      }

      context.emit('on-load', image)

      data.value = image
      styleIcon.value = getStyleName(image)
    } else if (type === 'public') {
      const image = icon.value.toString().replace(/^@/, props.urlIcon) + '.svg'

      data.value = undefined
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

  onUnmounted(() => {
    if (adaptive) {
      ImageAdaptive.remove(elementIcon)
    }
  })

  return {
    text,
    classIcon,
    styleIcon,
    image,
    adaptiveX,
    adaptiveY
  }
}
