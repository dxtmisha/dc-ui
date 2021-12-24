<template>
  <span class="d-icon-item" v-bind="binds" v-text="text"/>
</template>

<script>
import { props } from './props'
import { computed, readonly, toRefs } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useIcon from './useIcon'

export default {
  name: 'DIconItem',
  props,
  setup (props, context) {
    const { icon } = toRefs(props)

    const {
      text,
      classIcon,
      styleIcon,
      image
    } = useIcon(icon)

    const binds = readonly({
      class: computed(() => {
        return {
          'status-image': image.value,
          'status-disabled': props.disabled,
          'status-hide': props.hide,
          ...classIcon.value
        }
      }),
      style: styleIcon,
      translate: 'no'
    })

    useAdmin('d-icon-item', context)

    return {
      text,
      binds
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
