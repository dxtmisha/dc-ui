<template>
  <div
    ref="cell"
    class="d-motion-cell"
    @transitionend="onTransition"
  >
    <slot/>
  </div>
</template>

<script>
import { props } from './props'
import { ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useCell from './useCell'

export default {
  name: 'DMotionCell',
  props,
  setup (props, context) {
    const cell = ref(undefined)

    const {
      update,
      onTransition
    } = useCell(cell)

    useAdmin('d-motion-cell', context)

    return {
      cell,
      update,
      onTransition
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-motion-cell {
  @include motionCellInit;
}
</style>
