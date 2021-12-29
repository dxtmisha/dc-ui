<template>
  <div class="d-images"></div>
</template>

<script>
import { props } from './props'

export default {
  name: 'DImages',
  props,
  setup (props, context) {
    return {}
  }
}
</script>

<style lang="scss">
@import "style";

.d-images {
  @include imagesInit;
}
</style>
