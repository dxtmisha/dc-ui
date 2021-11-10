<template>
  <slot
    name="control"
    :class-list="`d-window__control ${id}`"
    :on-click="onClick"
    :on-contextmenu="onContextmenu"
  />
  <teleport to="body">
    <div
      v-if="valueOpen"
      ref="modal"
      v-bind="$attrs"
      :class="classList"
      :style="styleList"
      :data-window-id="id"
    >
      <d-scrollbar
        class="d-window__body"
        @animationend="onPersistent"
        @transitionend="onClose"
      >
        <slot name="window"/>
      </d-scrollbar>
    </div>
  </teleport>
</template>

<script>
import DScrollbar from '@/components/DScrollbar'
import { props } from '@/components/DWindow/props'
import { computed, toRefs } from 'vue'
import { useEvent } from './useEvent'
import { usePosition } from './usePosition'
import { useToggle } from './useToggle'
import { useVerification } from './useVerification'

export default {
  name: 'DWindow',
  components: { DScrollbar },
  inheritAttrs: false,
  props,
  emits: ['on-open'],
  setup (props, context) {
    const {
      // Options
      shape,
      width,
      adaptive,
      fullscreen,
      bodyWidthAuto
    } = toRefs(props)

    const {
      valueOpen,
      id,
      modal,
      contextmenu,
      clientX,
      clientY,
      watchPosition
    } = usePosition(props)

    const {
      verification,
      onPersistent
    } = useVerification(
      props,
      context,
      id,
      modal
    )

    const {
      onClick,
      onContextmenu,
      onClose
    } = useEvent(
      props,
      valueOpen,
      contextmenu,
      clientX,
      clientY,
      verification
    )

    const classList = computed(() => {
      return {
        [`d-window ${id}`]: true,
        [`adaptive-${adaptive.value}`]: adaptive.value,
        [`shape-${shape.value}`]: shape.value,
        'option-fullscreen': fullscreen.value,
        'option-body-auto': bodyWidthAuto.value
      }
    })
    const styleList = computed(() => {
      return {
        '--wn__bd-width': width.value
      }
    })

    useToggle(
      props,
      valueOpen,
      modal,
      verification,
      watchPosition
    )

    return {
      valueOpen,
      id,
      modal,
      classList,
      styleList,
      onClick,
      onContextmenu,
      onClose,
      onPersistent
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-window {
  @include windowInit;
}
</style>
