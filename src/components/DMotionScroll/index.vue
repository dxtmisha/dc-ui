<template>
  <component
    ref="scroll"
    :is="tag"
    :class="classList"
  >
    <slot :className="id"/>
  </component>
</template>

<script>
import { props } from '@/components/DMotionScroll/props'
import { computed, ref } from 'vue'
import getIdElement from '@/functions/getIdElement'
import useAdmin from '@/uses/useAdmin'
import useMotion from './useMotion'
import useScroll from '@/uses/useScroll'

export default {
  name: 'DMotionScroll',
  props,
  setup (props, context) {
    const id = `s--${getIdElement()}`
    const scroll = ref(undefined)

    const classScroll = useScroll()
    const classList = computed(() => {
      return {
        'd-motion-scroll': true,
        ...(props.scrollHide ? classScroll.value : {})
      }
    })

    useMotion(
      id,
      scroll,
      props,
      context
    )

    useAdmin('d-motion-scroll', context)

    return {
      id,
      scroll,
      classList
    }
  }
}
</script>

<style lang="scss"></style>
