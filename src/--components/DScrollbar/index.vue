<template>
  <component
    :is="tag"
    ref="scroll"
    :class="classList"
    @scroll="onScroll"
  >
    <slot/>
  </component>
</template>

<script>
import { props } from '@/components/DScrollbar/props'
import { readonly, toRefs } from 'vue'
import { useScroll } from './useScroll'
import { useAdmin } from '@/uses/useAdmin'
import { useBorder } from './useBorder'

export default {
  name: 'DScrollbar',
  props,
  setup (props) {
    const {
      visible,
      border
    } = toRefs(props)

    const {
      scroll,
      onScroll
    } = useBorder(border)
    const { isScroll } = useScroll()

    const classList = readonly({
      'd-scrollbar': true,
      'status-visible': visible,
      'status-disabled': isScroll,
      'option-border': border
    })

    useAdmin('d-scrollbar-old')

    return {
      scroll,
      classList,
      onScroll
    }
  }
}
</script>

<style lang="scss"></style>
