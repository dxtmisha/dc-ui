<template>
  <slot name="control"/>
</template>

<script>
import { props } from '@/components/DWindow/props'

export default {
  name: 'DWindow',
  props
}
</script>

<style lang="scss">
@import "style";

.d-window {
  @include windowInit;
}
</style>
