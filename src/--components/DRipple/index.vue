<template>
  <div
    v-if="!disabled"
    class="d-ripple"
    @mousedown="onMousedown"
  >
    <span
      v-for="item in items"
      :key="item.index"
      class="d-ripple__item"
      :style="item.style"
      @animationend="onStep($event, item)"
      @transitionend="onStep($event, item)"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAdmin } from '@/uses/useAdmin'

export default {
  name: 'DRipple',
  props: {
    disabled: Boolean
  },
  setup () {
    const items = ref([])

    const add = (x, y) => {
      items.value.push({
        index: index++,
        step: 0,
        style: {
          '--_rp-x': `${x}px`,
          '--_rp-y': `${y}px`
        }
      })
    }
    const update = () => {
      if (
        items.value.length > 0 &&
        items.value.length === items.value.filter(item => item.step > 1).length
      ) {
        items.value = []
      }
    }

    const onMousedown = ({
      offsetX,
      offsetY
    }) => add(offsetX, offsetY)
    const onStep = ({ target }, item) => {
      item.step++

      switch (item.step) {
        case 1:
          target.classList.add('step-1')
          break
        default:
          update()
          break
      }
    }

    let index = 1

    useAdmin('d-ripple-old')

    return {
      items,
      onMousedown,
      onStep
    }
  }
}
</script>

<style lang="scss">
</style>
