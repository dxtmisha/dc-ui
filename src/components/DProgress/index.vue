<template>
  <component
    ref="progress"
    :is="tag"
    v-bind="binds"
    class="d-progress"
    :max="max"
    :value="value"
    viewBox="0 0 48 48"
    @animationend.stop="onAnimation"
  >
    <circle
      v-if="type === 'circular'"
      class="d-progress__circle"
      cx="24"
      cy="24"
      r="20"
    />
  </component>
</template>

<script>
import { props } from './props'
import { computed, readonly, ref } from 'vue'
import useAdmin from './../../uses/useAdmin'
import useVisible from './useVisible'

export default {
  name: 'DProgress',
  props,
  setup (props, context) {
    const progress = ref(undefined)
    const tag = computed(() => {
      if (props.type !== 'linear') {
        return 'svg'
      } else if (props.value) {
        return 'progress'
      } else {
        return 'div'
      }
    })
    const binds = readonly({
      class: computed(() => {
        return {
          [`type-${props.type}`]: props.type,
          [`indeterminate-${props.indeterminate}`]: props.indeterminate,
          'option-bottom': props.bottom
        }
      }),
      style: computed(() => {
        return {
          '--_pr__vl-value': props.value,
          '--_pr__vl-max': props.max
        }
      })
    })

    const onAnimation = useVisible(progress, props)

    useAdmin('d-progress', context)

    return {
      progress,
      tag,
      binds,
      onAnimation
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-progress {
  @include progressInit;
}
</style>
