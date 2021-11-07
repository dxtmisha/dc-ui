<template>
  <component
    :is="tag"
    ref="scroll"
    :class="classList"
    @scroll="onScroll"
  >
    <slot/>
  </component>
</template>

<script>
import { computed, toRefs } from 'vue'
import { useBorder } from './useBorder'
import { useScroll } from './useScroll'

export default {
  name: 'DScrollbar',
  props: {
    // Status
    visible: Boolean,

    // Options
    tag: {
      type: String,
      default: 'div'
    },
    border: Boolean
  },
  setup (props) {
    const {
      visible,
      border
    } = toRefs(props)

    const {
      scroll,
      onScroll
    } = useBorder(border)
    const { scrollWidth } = useScroll()

    const classList = computed(() => {
      return {
        'd-scrollbar': true,
        'status-visible': visible.value,
        'status-disabled': scrollWidth.value < 8,
        'option-border': border.value
      }
    })

    return {
      classList,
      onScroll,
      scroll
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-scrollbar {
  @include scrollbarInit;
}
</style>
