<template>
  <span
    :class="classList"
    :style="styleIcon"
    translate="no"
    v-text="text"
  />
</template>

<script>
import { props } from '@/components/DIconItem/props'
import { toRefs } from 'vue'
import { useAdmin } from '@/uses/useAdmin'
import { useWatch } from '@/uses/useWatch'
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
      text,
      classIcon,
      styleIcon,
      image
    } = useIcon(icon)

    const classList = useWatch([
      image,
      disabled,
      hide
    ], data => {
      data.value = {
        'd-icon-item notranslate': true,
        ...classIcon.value,
        'status-disabled': disabled.value,
        'status-hide': hide.value
      }
    })

    useAdmin('d-icon-item')

    return {
      text,
      classList,
      styleIcon
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
