<template>
  <div class="d-card-text">
    <div v-if="title" class="d-card-text__title" v-html="title"/>
    <div v-html="text"/>
    <slot/>
  </div>
</template>

<script>
import { props } from './props'
import useAdmin from '../../uses/useAdmin'

export default {
  name: 'DCardText',
  props,
  setup (props, context) {
    useAdmin('d-card-text', context)
  }
}
</script>

<style lang="scss">
@import "style";

.d-card-text {
  @include cardTextInit;
}
</style>
