<template>
  <div
    ref="ripple"
    class="d-ripple"
    @mousedown="onMousedown"
  />
</template>

<script>
import { useAdmin } from '@/tool/use/useAdmin'
import { useItem } from '@/components/DRipple/useItem'

export default {
  name: 'DRipple',
  setup () {
    const {
      ripple,
      onMousedown
    } = useItem()

    useAdmin('d-ripple')

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
