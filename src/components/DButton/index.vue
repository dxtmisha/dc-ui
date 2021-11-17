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
    <d-icon v-if="icon" v-bind="bindIcon"/>
    <d-icon v-if="iconTrailing" v-bind="bindTrailing"/>
    <span class="d-button__text">
      {{ text }}<slot/>
    </span>
    <d-badge
      v-if="bindBadge"
      v-bind="bindBadge"
      :hide="disabled"
    />
    <d-ripple v-if="ripple && !disabled && !readonly"/>
  </component>
</template>

<script>
import DBadge from '@/components/DBadge'
import DIcon from '@/components/DIcon'
import DProgress from '@/components/DProgress'
import DRipple from '@/components/DRipple'
import { props } from '@/components/DButton/props'
import { ref, toRefs } from 'vue'
import { setupBadge } from '@/components/DBadge/setupBadge'
import { setupIcon } from '@/components/DIcon/setupIcon'
import { useAdmin } from '@/tool/use/useAdmin'
import { useColor } from '@/tool/use/useColor'
import { useWatch } from '@/tool/use/useWatch'

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
      icon,
      iconActive,
      iconTrailing,
      badge,
      badgeIcon,
      text,
      selected,
      turn,
      dragged,
      disabled,
      readonly,
      hide,
      palette,
      color,
      appearance,
      size,
      shape,
      adaptive,
      lowercase,
      dense,
      iconReadonly,
      iconAnimationShow,
      iconBackground
    } = toRefs(props)

    const iconAnimationHide = ref(undefined)

    const propAdaptive = useWatch([
      text,
      adaptive
    ], data => {
      data.value = text.value || 'default' in context.slots ? adaptive.value : 'icon'
      iconAnimationHide.value = data.value === 'icon' ? 'type1' : 'type2'
    })

    const {
      bindBadge
    } = setupBadge(
      badge,
      badgeIcon
    )

    const {
      bindIcon,
      bindTrailing
    } = setupIcon(
      'd-button__icon bt-',
      icon,
      iconActive,
      iconTrailing,
      undefined,
      selected,
      turn,
      disabled,
      hide,
      undefined,
      iconAnimationHide,
      iconAnimationShow,
      iconBackground,
      iconReadonly
    )

    const { classColor } = useColor(color, palette)

    const classList = useWatch([
      selected,
      dragged,
      readonly,
      disabled,
      classColor,
      appearance,
      size,
      shape,
      propAdaptive,
      lowercase,
      dense
    ], data => {
      data.value = {
        'd-button a-static': true,
        'status-selected': selected.value,
        'status-dragged': dragged.value,
        'status-readonly': readonly.value,
        'status-disabled': disabled.value,
        ...classColor.value,
        [`appearance-${appearance.value}`]: appearance.value,
        [`size-${size.value}`]: size.value,
        [`shape-${shape.value}`]: shape.value,
        [`adaptive-${propAdaptive.value}`]: propAdaptive.value,
        'option-lowercase': lowercase.value,
        'option-dense': dense.value
      }
    })

    useAdmin('d-button')

    return {
      bindBadge,
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
