<template>
  <component
    :is="tag"
    :class="classList"
    :disabled="disabled"
    :data-value="value"
    @click="onClick"
  >
    <d-icon
      v-if="icon"
      v-bind="bindIcon"
      class="d-button__icon bt-icon"
    />
  </component>
</template>

<script>
import DIcon from '@/components/DIcon'
import { props } from '@/components/DButton/props'
import { computed, toRefs } from 'vue'
import { useColor } from '@/uses/useColors'
import { useIcon } from './useIcon'

export default {
  name: 'DButton',
  components: { DIcon },
  props,
  setup (props, context) {
    const {
      // Values
      text,

      // Status
      selected,
      readonly,
      disabled,

      // Options
      palette,
      color,
      appearance,
      size,
      shape,
      adaptive,
      lowercase,
      dense
    } = toRefs(props)

    const optionAdaptive = computed(() => {
      return text.value || 'default' in context.slot ? adaptive.value : 'icon'
    })

    const { classColor } = useColor(color, palette)
    const {
      bindIcon,
      bindTrailing
    } = useIcon(props, optionAdaptive)

    const classList = computed(() => {
      return {
        'd-button a-static': true,
        'status-selected': selected.value,
        'status-readonly': readonly.value,
        'status-disabled': disabled.value,
        ...classColor.value,
        [`appearance-${appearance.value}`]: appearance.value,
        [`size-${size.value}`]: size.value,
        [`shape-${shape.value}`]: shape.value,
        [`adaptive-${optionAdaptive.value}`]: optionAdaptive.value,
        'option-lowercase': lowercase.value,
        'option-dense': dense.value
      }
    })

    return {
      bindIcon,
      bindTrailing,
      classList
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-button {
  @include buttonInit;
}
</style>
