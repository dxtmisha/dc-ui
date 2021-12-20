<template>
  <slot
    name="control"
    :class-list="`d-window__control ${id}`"
    :toggle="toggle"
    :on-click="onClick"
    :on-contextmenu="onContextmenu"
    :open="open"
  />
  <teleport to="body">
    <div
      v-if="open"
      ref="modal"
      v-bind="$attrs"
      :class="classList"
      :style="styleList"
      :data-window-id="id"
    >
      <div
        class="d-window__body"
        :class="classScroll"
        @transitionend="onTransition"
      >
        <slot
          name="window"
          :toggle="toggle"
          :on-click="onClick"
          :on-contextmenu="onContextmenu"
        />
      </div>
    </div>
  </teleport>
</template>

<script>
import { props } from './props'
import { computed, ref } from 'vue'
import getIdElement from '@/functions/getIdElement'
import useAdmin from '@/uses/useAdmin'
import useCoordinates from './useCoordinates'
import useOpen from './useOpen'
import useScroll from '@/--uses/useScroll'

export default {
  name: 'DWindow',
  inheritAttrs: false,
  props,
  emits: ['on-open'],
  setup (props, context) {
    const id = `w--${getIdElement()}`
    const modal = ref(undefined)
    const open = ref(false)
    const contextmenu = ref(false)

    const {
      clientX,
      clientY,
      watchPosition
    } = useCoordinates(
      id,
      modal,
      props,
      contextmenu,
      open
    )

    const {
      verification,
      toggle,
      onTransition
    } = useOpen(
      id,
      modal,
      props,
      open,
      watchPosition,
      context
    )

    const classScroll = useScroll()
    const classList = computed(() => {
      return {
        [`d-window ${id}`]: true,
        [`size-${props.size}`]: props.size,
        [`shape-${props.shape}`]: props.shape,
        [`adaptive-${props.adaptive}`]: props.adaptive,
        [`axis-${props.axis}`]: props.axis
      }
    })
    const styleList = computed(() => {
      return { '--_wn-width': props.width }
    })

    const onClick = event => {
      clientX.set(event.clientX)
      clientY.set(event.clientY)

      if (!open.value) {
        contextmenu.value = event.type === 'contextmenu'
        verification(event.target)
      }
    }
    const onContextmenu = event => {
      event.preventDefault()
      event.stopPropagation()
      onClick(event)
    }

    useAdmin('d-window', context)

    return {
      id,
      modal,
      open,
      classScroll,
      classList,
      styleList,
      toggle,
      onClick,
      onContextmenu,
      onTransition
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
