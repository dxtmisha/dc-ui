<template>
  <component
    :is="tag"
    :class="classList"
    :disabled="disabled"
    :data-value="value"
  >
    <d-progress
      v-if="progress && !disabled"
      :visible="progress"
      type="circular"
    />
    <d-icon
      v-if="icon"
      v-bind="bindIcon"
    />
    <d-icon
      v-if="iconTrailing"
      v-bind="bindTrailing"
    />
    <span class="d-button__text">
      {{ text }}<slot/>
    </span>
    <d-badge
      v-if="bindBadge"
      v-bind="bindBadge"
      :disabled="disabled"
      :alignment="badgeAlignment"
    />
    <d-ripple v-if="ripple" :disabled="disabled || readonly"/>
  </component>
</template>

<script>
import DBadge from '@/--components/DBadge'
import DIcon from '@/--components/DIcon'
import DProgress from '@/--components/DProgress'
import DRipple from '@/--components/DRipple'
import { props } from '@/components/DButton/props'
import { computed, toRefs } from 'vue'
import { setupBadge } from '@/components/DBadge/setupBadge'
import { useColor } from '@/uses/useColor'
import { useIcon } from './useIcon'
import { useAdmin } from '@/uses/useAdmin'

export default {
  name: 'DButton',
  components: {
    DBadge,
    DIcon,
    DProgress,
    DRipple
  },
  props,
  setup (props, context) {
    const {
      // Status
      selected,
      dragged,
      readonly,
      disabled,

      // Options
      palette,
      color,
      appearance,
      size,
      shape,
      lowercase,
      dense
    } = toRefs(props)

    const { classColor } = useColor(color, palette)
    const {
      optionAdaptive,
      bindIcon,
      bindTrailing
    } = useIcon(props, context)
    const { bindBadge } = setupBadge(props)
    const badgeAlignment = computed(
      () => [undefined, 'text', 'text-color'].indexOf(appearance.value) !== -1 && optionAdaptive.value !== 'icon' ? 'static' : 'overlap'
    )

    const classList = computed(() => {
      return {
        'd-button a-static': true,
        'status-selected': selected.value,
        'status-dragged': dragged.value,
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

    useAdmin('d-button-old')

    return {
      bindIcon,
      bindTrailing,
      bindBadge,
      badgeAlignment,
      classList
    }
  }
}
</script>

<style lang="scss">
</style>
