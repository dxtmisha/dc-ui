<template>
  <component
    :is="tag"
    ref="progress"
    :class="classList"
    :style="styleValue"
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
import { toRefs } from 'vue'
import { useAdmin } from '@/uses/useAdmin'
import { useWatch } from '@/uses/useWatch'
import { useValue } from '@/components/DProgress/useValue'
import { useVisible } from '@/components/DProgress/useVisible'

export default {
  name: 'DProgress',
  props,
  setup (props) {
    const {
      value,
      max,
      visible,
      type,
      indeterminate,
      delay,
      bottom
    } = toRefs(props)

    const {
      progress,
      onAnimation
    } = useVisible(
      visible,
      delay
    )

    const {
      tag,
      styleValue
    } = useValue(
      value,
      max,
      type
    )

    const classList = useWatch([
      type,
      indeterminate,
      bottom
    ], data => {
      data.value = {
        'd-progress': true,
        [`type-${type.value}`]: type.value,
        [`indeterminate-${indeterminate.value}`]: indeterminate.value,
        'option-bottom': bottom.value
      }
    })

    useAdmin('d-progress')

    return {
      progress,
      tag,
      classList,
      styleValue,
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
