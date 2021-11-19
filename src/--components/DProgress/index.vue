<template>
  <component
    :is="tag"
    ref="progress"
    :class="classList"
    :style="styleList"
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
import { props } from '@/components/DProgress/props'
import { computed, toRefs } from 'vue'
import { useVisible } from '@/--components/DProgress/useVisible'
import { useAdmin } from '@/uses/useAdmin'

export default {
  name: 'DProgress',
  props,
  setup (props) {
    const {
      // Values
      value,
      max,

      // Options
      type,
      indeterminate,
      bottom
    } = toRefs(props)

    const {
      progress,
      onAnimation
    } = useVisible(props)

    const tag = computed(() => {
      if (type.value !== 'linear') {
        return 'svg'
      } else if (value.value) {
        return 'progress'
      } else {
        return 'div'
      }
    })
    const classList = computed(() => {
      return {
        'd-progress': true,
        [`d-progress type-${type.value}`]: type.value,
        [`indeterminate-${indeterminate.value}`]: indeterminate.value,
        'option-bottom': bottom.value
      }
    })
    const styleList = computed(() => {
      return {
        '--pr__vl-max': max.value,
        '--pr__vl-value': value.value
      }
    })

    useAdmin('d-progress-old')

    return {
      progress,
      tag,
      classList,
      styleList,
      onAnimation
    }
  }
}
</script>

<style lang="scss">
</style>
