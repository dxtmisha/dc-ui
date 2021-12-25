<template>
  <div ref="axis" class="d-motion-axis" :class="classList">
    <div
      v-for="(html, name) in this.$slots"
      :ref="(el) => { if (el) slides[name] = el }"
      :key="name"
      class="d-motion-axis__slide"
      :data-name="name"
      @transitionend="onTransitionend($event, name)"
    >
      <slot :name="name"/>
    </div>
  </div>
</template>

<script>
import { props } from './props'
import { computed, onBeforeUpdate, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'
import useGo from './useGo'
import useTo from './useTo'

export default {
  name: 'DMotionAxis',
  props,
  setup (props, context) {
    const axis = ref(undefined)
    const slides = ref({})

    const {
      propSelected,
      toGo,
      update,
      onTransitionend
    } = useGo(
      axis,
      slides,
      props,
      context
    )

    const {
      propAxis,
      propTransition,
      toTop,
      toRight,
      toBottom,
      toLeft,
      toDown,
      toUp
    } = useTo(
      props,
      update
    )

    const classList = computed(() => {
      return {
        [`axis-${propAxis.value}`]: propAxis.value,
        [`transition-${propTransition.value}`]: propTransition.value
      }
    })

    onBeforeUpdate(() => {
      slides.value = {}
    })

    useAdmin('d-motion-axis', context)

    return {
      axis,
      slides,
      propSelected,
      propAxis,
      propTransition,
      classList,
      toGo,
      toTop,
      toRight,
      toBottom,
      toLeft,
      toDown,
      toUp,
      onTransitionend
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-motion-axis {
  @include motionAxisInit;
}
</style>
