<template>
  <div></div>
</template>

<script>
import { props } from '@/components/DList/props'

export default {
  name: 'DList',
  props,
  setup (props) {
    return {}
  }
}
</script>

<style lang="scss">
@import "style";

.d-list {
  @include listInit;
}
</style>
