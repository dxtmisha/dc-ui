<template>
  <slot
    name="control"
    :class-list="`d-window__control ${id}`"
    :on-click="onClick"
    :on-contextmenu="onContextmenu"
    :open="valueOpen"
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
      <div
        class="d-window__body"
        :class="classScroll"
        @animationend="onPersistent"
        @transitionend="onClose"
      >
        <slot name="window"/>
      </div>
    </div>
  </teleport>
</template>

<script>
import { props } from '@/--components/DWindow/props'
import { computed, readonly, toRefs } from 'vue'
import { useScroll } from '@/--components/DScrollbar/useScroll'
import { useAdmin } from '@/tool/use/useAdmin'
import { useEvent } from './useEvent'
import { usePosition } from './usePosition'
import { useToggle } from './useToggle'
import { useVerification } from './useVerification'

export default {
  name: 'DWindow',
  inheritAttrs: false,
  props,
  emits: ['on-open'],
  setup (props, context) {
    const {
      // Status,
      open,

      // Options
      shape,
      width,
      adaptive,
      fullscreen,
      widthByControl,
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
      open,
      valueOpen,
      contextmenu,
      clientX,
      clientY,
      verification
    )

    const { classScroll } = useScroll()
    const classList = computed(() => {
      return {
        [`d-window ${id}`]: true,
        [`adaptive-${adaptive.value}`]: adaptive.value,
        [`shape-${shape.value}`]: shape.value,
        'option-fullscreen': fullscreen.value,
        'option-control': widthByControl.value,
        'option-body-auto': bodyWidthAuto.value
      }
    })
    const styleList = readonly({ '--wn__bd-width': width })

    useToggle(
      open,
      valueOpen,
      modal,
      verification,
      watchPosition
    )

    useAdmin('d-window')

    return {
      valueOpen,
      id,
      modal,
      classList,
      classScroll,
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
