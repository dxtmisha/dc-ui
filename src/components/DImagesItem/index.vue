<template>
  <div class="d-images-item"></div>
</template>

<script>
import { props } from './props'

export default {
  name: 'DImagesItem',
  props,
  setup (props, context) {
    return {}
  }
}
</script>

<style lang="scss">
@import "style";

.d-images-item {
  @include imagesItemInit;
}
</style>
