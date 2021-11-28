<template>
  <span
    :class="classList"
    :style="styleIcon"
    translate="no"
    v-text="text"
  />
</template>

<script>
import { props } from '@/--components/DIconItem/props'
import { toRefs } from 'vue'
import { useAdmin } from '@/--uses/useAdmin'
import { useClasses } from '@/--uses/useClasses'
import { useIcon } from './useIcon'

export default {
  name: 'DIconItem',
  props,
  setup (props) {
    const {
      icon,
      disabled,
      hide
    } = toRefs(props)

    const {
      text,
      classIcon,
      styleIcon,
      image
    } = useIcon(icon)

    const classList = useClasses({
      'd-icon-item notranslate': true,
      status: {
        image,
        disabled,
        hide
      },
      classIcon
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
