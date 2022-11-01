<template>
  <component
    ref="scroll"
    :is="tag"
    class="d-motion-scroll"
    :class="classList"
  >
    <slot :className="id"/>
  </component>
</template>

<script>
import { props } from './props'
import { computed, ref } from 'vue'
import getIdElement from './../../functions/getIdElement'
import useAdmin from '../../uses/useAdmin'
import useElement from './useElement'
import useMotion from './useMotion'
import useScroll from '../../uses/useScroll'

export default {
  name: 'DMotionScroll',
  props,
  emits: ['on-scroll'],
  setup (props, context) {
    const id = `s--${getIdElement()}`
    const scroll = ref(undefined)

    const {
      propElement,
      onScroll
    } = useElement(scroll, props)

    const classScroll = useScroll()
    const classList = computed(() => {
      return { ...(props.scrollHide ? classScroll.value : {}) }
    })

    const { update } = useMotion(
      id,
      scroll,
      props,
      propElement,
      context,
      onScroll
    )

    useAdmin('d-motion-scroll', context)

    return {
      id,
      scroll,
      classList,
      update
    }
  }
}
</script>

<style lang="scss"></style>
