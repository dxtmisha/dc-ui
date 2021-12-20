<template>
  <span class="d-icon" :class="classList">
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
    <slot/>
  </span>
</template>

<script>
import DIconItem from '@/components/DIconItem'
import { props } from './props'
import { computed, toRefs } from 'vue'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DIcon',
  components: { DIconItem },
  props,
  setup (props, context) {
    const {
      iconActive,
      active
    } = toRefs(props)

    const isActive = computed(() => iconActive.value && active.value)
    const classList = computed(() => {
      return {
        'status-turn': props.turn,
        'status-hide': props.hide,
        [`size-${props.size}`]: props.size,
        [`animation-${props.animationHide}`]: props.animationHide,
        'option-animation': props.animationShow,
        'option-background': props.background
      }
    })

    useAdmin('d-icon', context)

    return {
      isActive,
      classList
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
