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
import { toRefs } from 'vue'
import { useAdmin } from '@/tool/use/useAdmin'
import { useScroll } from '@/tool/use/useScroll'
import { useScrollBorder } from '@/tool/use/useScrollBorder'
import { useWatch } from '@/tool/use/useWatch'

export default {
  name: 'DScrollbar',
  props,
  setup (props) {
    const {
      visible,
      border
    } = toRefs(props)

    const { classScroll } = useScroll()
    const {
      scroll,
      classScrollBorder,
      onScroll
    } = useScrollBorder(border)

    const classList = useWatch([
      classScroll,
      classScrollBorder,
      visible
    ], data => {
      data.value = {
        ...classScroll.value,
        ...classScrollBorder.value,
        'status-visible': visible
      }
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

<style lang="scss">

</style>
