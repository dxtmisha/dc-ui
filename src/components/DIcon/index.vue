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
import DIconItem from '@/components/DIconItem'
import { props } from './props'
import { toRefs } from 'vue'
import { useAdmin } from '@/uses/useAdmin'
import { useWatch } from '@/uses/useWatch'

export default {
  name: 'DIcon',
  components: { DIconItem },
  props,
  setup (props) {
    const {
      iconActive,
      active,
      turn,
      hide,
      size,
      animationHide,
      animationShow,
      background
    } = toRefs(props)

    const isActive = useWatch(active, data => {
      data.value = !!(iconActive.value && active.value)
    })

    const classList = useWatch([
      turn,
      hide,
      size,
      animationHide,
      animationShow,
      background
    ], data => {
      data.value = {
        'd-icon': true,
        'status-turn': turn.value,
        'status-hide': hide.value,
        [`size-${size.value}`]: size.value,
        [`animation-${animationHide.value}`]: animationHide.value,
        'option-animation': animationShow.value,
        'option-background': background.value
      }
    })

    useAdmin('d-icon')

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
