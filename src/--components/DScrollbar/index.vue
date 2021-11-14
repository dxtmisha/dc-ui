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
import { readonly, toRefs } from 'vue'
import { setupScroll } from './setupScroll'
import { useAdmin } from '@/tool/use/useAdmin'
import { useBorder } from './useBorder'

export default {
  name: 'DScrollbar',
  props: {
    // Status
    visible: Boolean,

    // Options
    tag: {
      type: String,
      default: 'div'
    },
    border: Boolean
  },
  setup (props) {
    const {
      visible,
      border
    } = toRefs(props)

    const {
      scroll,
      onScroll
    } = useBorder(border)
    const { isScroll } = setupScroll()

    const classList = readonly({
      'd-scrollbar': true,
      'status-visible': visible,
      'status-disabled': isScroll,
      'option-border': border
    })

    useAdmin('d-scrollbar')

    return {
      scroll,
      classList,
      onScroll
    }
  }
}
</script>

<style lang="scss"></style>
