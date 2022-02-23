<template>
  <div ref="transform" class="d-motion-transform">
    <teleport
      to="body"
      :disabled="!teleport"
    >
      <div
        ref="content"
        :class="classList"
        class="d-motion-transform__context"
        @transitionend="onTransitionend"
      >
        <div
          ref="head"
          class="d-motion-transform__head"
          @click="onClick"
        >
          <slot name="head"/>
          <slot/>
        </div>
        <div
          ref="body"
          v-if="open || propOpen || propShow"
          class="d-motion-transform__body mt-body"
        >
          <slot name="body" class-close="panel-close"/>
        </div>
      </div>
      <div
        v-if="teleport"
        class="d-motion-transform__background"
      />
    </teleport>
  </div>
</template>

<script>
import { props } from './props'
import { computed, ref } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useClasses from './useClasses'
import useEvent from './useEvent'
import useMotion from './useMotion'
import useScroll from '../../uses/useScroll'

export default {
  name: 'DMotionTransform',
  props,
  emits: ['on-open', 'on-close'],
  setup (props, context) {
    const transform = ref(undefined)
    const content = ref(undefined)
    const head = ref(undefined)
    const body = ref(undefined)

    const propOpen = ref(false)
    const propShow = ref(false)

    const {
      classStatic,
      classOpen,
      classWindowOpen,
      styleTransform,
      styleContent,
      reset
    } = useClasses(
      transform,
      content,
      context,
      propOpen,
      propShow
    )

    const {
      toggleEvent,
      onClick
    } = useEvent(
      content,
      props,
      context,
      propOpen
    )

    const {
      teleport,
      onTransitionend
    } = useMotion(
      transform,
      content,
      head,
      body,
      props,
      propOpen,
      propShow,
      classStatic,
      classOpen,
      classWindowOpen,
      styleTransform,
      styleContent,
      reset,
      toggleEvent
    )

    const classScroll = useScroll()
    const classList = computed(() => {
      return {
        [`adaptive-${props.adaptive}`]: props.adaptive,
        'option-bottom': props.bottom,
        'status-window': teleport.value,
        'status-visible': !teleport.value,
        ...classScroll.value
      }
    })

    useAdmin('d-motion-transform', context)

    return {
      transform,
      content,
      head,
      body,
      teleport,
      propOpen,
      propShow,
      classList,
      onClick,
      onTransitionend
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-motion-transform {
  @include motionTransformInit;
}
</style>
