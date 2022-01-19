<template>
  <slot
    name="control"
    :class-list="`d-tooltip__control ${id}`"
    :on-click="onClick"
    :on-mouseover="onMouseover"
    :on-mouseout="onMouseout"
  />
  <teleport to="body">
    <div
      ref="tooltip"
      v-if="isShow"
      v-bind="binds"
      class="d-tooltip"
    >
      {{ text }}
      <slot/>
    </div>
  </teleport>
</template>

<script>
import { props } from './props'
import { computed, ref } from 'vue'
import getIdElement from './../../functions/getIdElement'
import useAdmin from './../../uses/useAdmin'
import useEvent from './useEvent'
import usePosition from './usePosition'

export default {
  name: 'DTooltip',
  inheritAttrs: false,
  props,
  setup (props, context) {
    const id = `t--${getIdElement()}`
    const tooltip = ref(false)
    const open = ref(false)

    const {
      isShow,
      toggle
    } = usePosition(
      tooltip,
      props,
      context,
      id,
      open
    )

    const {
      onClick,
      onMouseover,
      onMouseout
    } = useEvent(
      id,
      open,
      toggle
    )

    const binds = computed(() => {
      return {
        class: {
          [`shape-${props.shape}`]: props.shape,
          'option-arrow': props.arrow
        },
        style: { '--_tt-max-width': props.width }
      }
    })

    useAdmin('d-tooltip', context)

    return {
      id,
      tooltip,
      isShow,
      binds,
      onClick,
      onMouseover,
      onMouseout
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-tooltip {
  @include tooltipInit;
}
</style>
