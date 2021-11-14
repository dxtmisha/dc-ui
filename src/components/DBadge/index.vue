<template>
  <span
    v-if="value || icon || dot"
    :class="classList"
    :style="styleList"
  >
    <d-icon-item
      v-if="icon"
      class="d-badge__icon"
      :icon="icon"
    />
    <template v-else-if="text">{{ text }}</template>
    <slot v-else/>
  </span>
</template>

<script>
import DIconItem from '@/components/DIconItem'
import { props } from './props'
import { computed, readonly, toRefs } from 'vue'
import { useColor } from '@/uses/useColors'
import { useAdmin } from '@/uses/useAdmin'

export default {
  name: 'DBadge',
  components: { DIconItem },
  props,
  setup (props) {
    const {
      // Values
      dot,
      value,
      max,

      // Status
      disabled,
      hide,

      // Options
      palette,
      color,
      alignment,
      size,
      shape,
      outline,

      // Position
      left,
      bottom
    } = toRefs(props)

    const { classColor } = useColor(color, palette)

    const text = computed(() => {
      const isNumber = parseInt(value.value)

      if (dot.value) {
        return undefined
      } else if (Number.isNaN(isNumber)) {
        return value.value
      } else {
        return isNumber > max.value ? `${max.value}+` : isNumber
      }
    })
    const classList = computed(() => {
      return {
        'd-badge': true,
        'value-dot': dot.value,
        'status-disabled': disabled.value,
        'status-hide': hide.value,
        ...classColor.value,
        [`alignment-${alignment.value}`]: alignment.value,
        [`size-${size.value}`]: size.value,
        [`shape-${shape.value}`]: shape.value,
        'option-outline': outline.value,
        'position-left': left.value,
        'position-bottom': bottom.value
      }
    })
    const styleList = readonly({ '--_bg--ol-color': outline })

    useAdmin('d-badge')

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

.d-badge {
  @include badgeInit;
}
</style>
