<template>
  <component
    ref="sticky"
    :is="tag"
  >
    <slot :className="id"/>
  </component>
</template>

<script>
import { props } from './props'
import { ref } from 'vue'
import getIdElement from './../../functions/getIdElement'
import useAdmin from '../../uses/useAdmin'
import useElement from '../DMotionScroll/useElement'
import useMotion from './useMotion'

export default {
  name: 'DMotionSticky',
  props,
  setup (props, context) {
    const id = `s--${getIdElement()}`
    const sticky = ref(undefined)

    const {
      propElement,
      onScroll
    } = useElement(sticky, props)

    const {
      update
    } = useMotion(
      id,
      sticky,
      props,
      propElement,
      onScroll
    )

    useAdmin('d-motion-sticky', context)

    return {
      id,
      sticky,
      update,
      onScroll
    }
  }
}
</script>

<style lang="scss"></style>
