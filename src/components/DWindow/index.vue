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
        @animationend="onPersistent"
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
import { props } from '@/components/DWindow/props'
import { ref, toRefs } from 'vue'
import { getIdElement } from '@/tool/functions'
import { useAdmin } from '@/tool/use/useAdmin'
import { useCoordinates } from '@/components/DWindow/useCoordinates'
import { useOpen } from '@/components/DWindow/useOpen'
import { usePersistent } from '@/components/DWindow/usePersistent'
import { useScroll } from '@/tool/use/useScroll'
import { useWatch } from '@/tool/use/useWatch'

export default {
  name: 'DWindow',
  props,
  emits: ['on-open'],
  setup (props, context) {
    const {
      beforeOpening,
      opening,
      disabled,
      width,
      size,
      axis,
      indent,
      shape,
      adaptive,
      autoClose,
      persistent
    } = toRefs(props)

    const id = `w--${getIdElement()}`
    const modal = ref(undefined)
    const open = ref(false)
    const contextmenu = ref(false)

    const { classScroll } = useScroll()
    const {
      classPersistent,
      onPersistent
    } = usePersistent(modal)

    const {
      clientX,
      clientY,
      x,
      y,
      originX,
      originY,
      minimum,
      watchPosition
    } = useCoordinates(
      id,
      modal,
      contextmenu,
      open,
      axis,
      indent
    )

    const {
      verification,
      toggle,
      onTransition
    } = useOpen(
      id,
      modal,
      open,
      beforeOpening,
      opening,
      disabled,
      autoClose,
      persistent,
      classPersistent,
      watchPosition,
      context
    )

    const onClick = (event) => {
      clientX.value = event.clientX
      clientY.value = event.clientY

      if (!open.value) {
        contextmenu.value = event.type === 'contextmenu'
        verification(event.target)
      }
    }
    const onContextmenu = (event) => {
      event.preventDefault()
      event.stopPropagation()
      onClick(event)
    }

    const classList = useWatch([
      size,
      axis,
      shape,
      adaptive
    ], data => {
      data.value = {
        [`d-window ${id}`]: true,
        [`size-${size.value}`]: size.value,
        [`axis-${axis.value}`]: axis.value,
        [`shape-${shape.value}`]: shape.value,
        [`adaptive-${adaptive.value}`]: adaptive.value
      }
    })
    const styleList = useWatch([
      open,
      width
    ], data => {
      data.value = {
        '--_wn-width': width.value,
        '--_wn-cl-x': `${clientX.value}px`,
        '--_wn-cl-y': `${clientY.value}px`,
        '--_wn-x': `${x.value}px`,
        '--_wn-y': `${y.value}px`,
        '--_wn-or-x': originX.value,
        '--_wn-or-y': originY.value,
        '--_wn--cn-width': minimum.value ? `${minimum.value}px` : null
      }
    })

    useAdmin('d-window')

    return {
      id,
      modal,
      open,
      classList,
      classScroll,
      styleList,
      toggle,
      onClick,
      onContextmenu,
      onPersistent,
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
