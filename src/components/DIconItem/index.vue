<template>
  <span v-bind="binds" translate="no" class="d-icon-item notranslate" v-text="text"/>
</template>

<script>
import { props } from './props'
import { computed, readonly } from 'vue'
import useAdmin from './../../uses/useAdmin'
import useIcon from './useIcon'

export default {
  name: 'DIconItem',
  props,
  emits: ['on-load'],
  setup (props, context) {
    const {
      text,
      classIcon,
      styleIcon,
      image
    } = useIcon(props, context)

    const binds = readonly({
      class: computed(() => {
        return {
          'status-image': image.value,
          'status-disabled': props.disabled,
          'status-hide': props.hide,
          ...classIcon.value
        }
      }),
      style: styleIcon
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
