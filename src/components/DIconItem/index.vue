<template>
  <span
    :class="classList"
    :style="styleList"
    translate="no"
    v-text="text"
  />
</template>

<script>
import { props } from '@/components/DIconItem/props'
import { toRefs } from 'vue'
import { useAdmin } from '@/tool/use/useAdmin'
import { useWatch } from '@/tool/use/useWatch'
import { useIcon } from './useIcon'

export default {
  name: 'DIconItem',
  props,
  setup (props) {
    const {
      // Values
      icon,

      // Status
      disabled,
      hide
    } = toRefs(props)

    const {
      type,
      text,
      classIcon,
      image
    } = useIcon(icon)

    const classList = useWatch([
      image,
      disabled,
      hide
    ], data => {
      data.value = {
        'd-icon-item notranslate': true,
        [classIcon.value]: classIcon.value,
        [`type-${type.value}`]: type.value,
        'status-disabled': disabled.value,
        'status-hide': hide.value
      }
    })
    const styleList = useWatch(image, data => {
      let style

      if (image.value) {
        switch (type.value) {
          case 'image':
            style = { 'background-image': `url(${image.value})` }
            break
          case 'color':
            style = { 'background-color': image.value }
            break
        }
      }

      data.value = style
    })

    useAdmin('d-icon-item')

    return {
      text,
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
