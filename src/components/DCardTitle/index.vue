<template>
  <div class="d-card-title">
    <d-icon
      v-if="icon"
      class="d-card-title__icon"
      :icon="icon"
      :icon-active="iconActive"
      :active="active"
      size="medium"
      :background="iconBackground"
    />
    <div class="d-card-title__title">
      <div class="d-card-title__text" v-html="text"/>
      <div class="d-card-title__description" v-html="description"/>
    </div>
    <slot/>
  </div>
</template>

<script>
import DIcon from '@/components/DIcon'
import { props } from './props'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DCardTitle',
  components: { DIcon },
  props,
  setup (props, context) {
    useAdmin('d-card-title', context)
    return {}
  }
}
</script>

<style lang="scss">
@import "style";

.d-card-title {
  @include cardTitleInit;
}
</style>
