<template>
  <component
    :is="tag"
    ref="scroll"
    :class="classList"
  >
    <slot/>
  </component>
</template>

<script>
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import useAdmin from '../../uses/useAdmin'
import useScroll from '../../uses/useScroll'
import useScrollBorder from '../../uses/useScrollBorder'

export default {
  name: 'DScrollbar',
  props,
  setup (props, context) {
    const { border } = toRefs(props)

    const scroll = ref(undefined)

    const classScroll = useScroll()
    const classScrollBorder = useScrollBorder(scroll, border)
    const classList = computed(() => {
      return {
        ...classScroll.value,
        ...classScrollBorder.value,
        'status-visible': props.visible
      }
    })

    useAdmin('d-scrollbar', context)

    return {
      scroll,
      classList
    }
  }
}
</script>

<style lang="scss"></style>
