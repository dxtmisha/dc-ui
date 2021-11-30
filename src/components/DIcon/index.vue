<template>
  <span ref="main" :class="classList">
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
import { computed, ref, toRefs } from 'vue'
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

    const main = ref(undefined)
    const isActive = computed(() => iconActive.value && active.value)
    const classList = computed(() => {
      return {
        'd-icon': true,
        'status-turn': props.turn,
        'status-hide': props.hide,
        [`size-${props.size}`]: props.size,
        [`animation-${props.animationHide}`]: props.animationHide,
        'option-animation': props.animationShow,
        'option-background': props.background
      }
    })

    useAdmin('d-icon', context, main)

    return {
      main,
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
