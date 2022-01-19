<template>
  <span class="d-badge" v-bind="binds">
    <template v-if="!dot">
      <d-icon-item
        v-if="icon"
        class="d-badge__icon"
        :icon="icon"
      />
      <template v-else-if="text">{{ text }}</template>
    </template>
  </span>
</template>

<script>
import DIconItem from './../DIconItem'
import { props } from './props'
import { computed } from 'vue'
import useAdmin from './../../uses/useAdmin'
import useColor from './../../uses/useColor'

export default {
  name: 'DBadge',
  components: { DIconItem },
  props,
  setup (props, context) {
    const text = computed(
      () => typeof props.badge === 'number' && props.badge > props.max ? `${props.max}+` : props.badge
    )

    const palette = useColor(props)
    const binds = computed(() => {
      const size = props.dot ? 'dot' : props.size

      return {
        class: {
          'status-hide': props.hide,
          'position-left': props.left,
          'position-bottom': props.bottom,
          [`alignment-${props.alignment}`]: props.alignment,
          [`size-${size}`]: size,
          [`shape-${props.shape}`]: props.shape,
          'option-outline': props.outline,
          ...palette.value
        },
        style: { '--_bg--ol-color': props.outline }
      }
    })

    useAdmin('d-badge', context)

    return {
      text,
      binds
    }
  }
}
</script>

<style lang="scss">
@import "src/components/DBadge/style";

.d-badge {
  @include badgeInit;
}
</style>
