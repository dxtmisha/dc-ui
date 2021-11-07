<template>
  <span :class="classList">
    <d-icon-item
      v-if="icon"
      :icon="icon"
      :disabled="disabled"
      :hide="active"
    />
    <d-icon-item
      v-if="iconActive"
      :icon="iconActive"
      :disabled="disabled"
      :hide="!active"
    />
  </span>
</template>

<script>
import DIconItem from '@/components/DIconItem'
import { props } from './props'

export default {
  name: 'DIcon',
  components: { DIconItem },
  props,
  computed: {
    classList () {
      return {
        'd-icon': true,
        'status-turn': this.turn,
        'status-hide': this.hide,
        [`size-${this.size}`]: this.size,
        [`shape-${this.shape}`]: this.shape,
        [`animation-${this.animationHide}`]: this.animationHide,
        'option-animation': this.animationShow,
        'option-background': this.background
      }
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-icon {
  @include iconInit;
}
</style>
