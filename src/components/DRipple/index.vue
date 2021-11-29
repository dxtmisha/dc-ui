<template>
  <div
    ref="ripple"
    class="d-ripple"
    @mousedown="onMousedown"
  />
</template>

<script>
import { ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useItem from './useItem'

export default {
  name: 'DRipple',
  setup (props, context) {
    const ripple = ref(undefined)
    const { onMousedown } = useItem(ripple)

    useAdmin('d-ripple', context)

    return {
      ripple,
      onMousedown
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-ripple {
  @include rippleInit;
}
</style>
