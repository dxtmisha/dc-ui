<template>
  <span :class="classList">
    <d-icon-item
      v-if="icon"
      :icon="icon"
      :disabled="disabled"
      :hide="isActive"
    />
    <d-icon-item
      v-if="iconActive"
      :icon="iconActive"
      :disabled="disabled"
      :hide="!isActive"
    />
  </span>
</template>

<script>
import DIconItem from '@/--components/DIconItem'
import { props } from './props'
import { useAdmin } from '@/tool/use/useAdmin'

export default {
  name: 'DIcon',
  components: { DIconItem },
  props,
  setup () {
    useAdmin('d-icon')
    return {}
  },
  computed: {
    isActive () {
      return !!this.active && !!this.iconActive
    },
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
