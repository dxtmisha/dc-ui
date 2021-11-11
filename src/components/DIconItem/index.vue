<template>
  <span
    :class="classList"
    :style="styleList"
    translate="no"
    v-text="valueText"
  />
</template>

<script>
import { computed, toRefs } from 'vue'
import { useImage } from '@/components/DIconItem/useImage'

export default {
  name: 'DIconItem',
  props: {
    // Values
    icon: [File, String],
    // Status
    disabled: Boolean,
    hide: Boolean
  },
  setup (props) {
    const {
      icon,
      disabled,
      hide
    } = toRefs(props)

    const {
      image
    } = useImage(icon)

    const type = computed(() => {
      let type

      if (icon.value) {
        if (icon.value instanceof File || icon.value.match(/\//)) {
          type = 'image'
        } else if (icon.value.match(/^#/)) {
          type = 'color'
        } else {
          type = icon.value.match(/^(la|filled|outlined|round|sharp|two-tone)-/)?.[1] || 'material'
        }
      }

      return type
    })
    const valueText = computed(() => {
      if ([
        'filled',
        'outlined',
        'round',
        'sharp',
        'two-tone',
        'material'
      ].indexOf(type.value) !== -1) {
        return icon.value.replace(/^(filled|outlined|round|sharp|two-tone)-/, '')
      } else {
        return undefined
      }
    })

    const classIconName = computed(() => {
      switch (type.value) {
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
    })
    const classList = computed(() => {
      return {
        'd-icon-item notranslate': true,
        [classIconName.value]: classIconName.value,
        [`type-${type.value}`]: type.value,
        'status-disabled': disabled.value,
        'status-hide': hide.value
      }
    })
    const styleList = computed(() => {
      if (image.value) {
        switch (type.value) {
          case 'image':
            return { 'background-image': `url(${image.value})` }
          case 'color':
            return { 'background-color': image.value }
          default:
            return undefined
        }
      } else {
        return undefined
      }
    })

    return {
      valueText,
      classList,
      styleList
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-icon-item {
  @include iconItemInit;
}
</style>
