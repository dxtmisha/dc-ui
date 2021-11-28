<template>
  <component
    :is="tag"
    :class="classList"
    :disabled="disabled"
    :data-value="value"
    @click="onClick"
  >
    <d-progress
      v-if="progress && !disabled"
      :visible="progress"
      type="circular"
    />
    <d-icon v-if="icon" v-bind="bindIcon"/>
    <keep-alive>
      <d-icon v-if="iconTrailing" v-bind="bindTrailing"/>
    </keep-alive>
    <span class="d-button__text">
      {{ text }}<slot/>
    </span>
    <d-badge
      v-if="bindBadge"
      v-bind="bindBadge"
      :hide="disabled"
    />
    <keep-alive>
      <d-ripple v-if="ripple && !disabled && !readonly"/>
    </keep-alive>
  </component>
</template>

<script>
import DBadge from '@/--components/DBadge'
import DIcon from '@/--components/DIcon'
import DProgress from '@/--components/DProgress'
import DRipple from '@/--components/DRipple'
import { props } from '@/--components/DButton/props'
import { reactive, ref, toRefs } from 'vue'
import { setupBadge } from '@/--components/DBadge/setupBadge'
import { setupIcon } from '@/--components/DIcon/setupIcon'
import { useAdmin } from '@/--uses/useAdmin'
import { useClasses } from '@/--uses/useClasses'
import { useColor } from '@/--uses/useColor'
import { useWatch } from '@/--uses/useWatch'

export default {
  name: 'DButton',
  components: {
    DBadge,
    DIcon,
    DProgress,
    DRipple
  },
  props,
  emits: ['on-click', 'on-trailing'],
  setup (props, context) {
    const refs = toRefs(props)
    const {
      text,
      selected,
      dragged,
      disabled,
      readonly,
      palette,
      color,
      appearance,
      size,
      shape,
      align,
      adaptive,
      lowercase,
      dense,
      iconReadonly,
      iconHide,
      iconAnimationShow,
      iconBackground
    } = refs

    const iconAnimationHide = ref(undefined)
    const propAdaptive = useWatch([text, adaptive], data => {
      data.value = text.value || 'default' in context.slots ? adaptive.value : 'icon'
      iconAnimationHide.value = data.value === 'icon' ? 'type1' : 'type2'
    })

    const {
      bindIcon,
      bindTrailing
    } = setupIcon(
      'd-button__icon bt',
      reactive({
        ...refs,
        active: selected,
        hide: iconHide,
        size: undefined,
        animationHide: iconAnimationHide,
        animationShow: iconAnimationShow,
        background: iconBackground,
        iconStatic: iconReadonly
      })
    )
    const { bindBadge } = setupBadge(props)

    const classList = useClasses({
      'd-button a-static': true,
      status: {
        selected,
        dragged,
        readonly,
        disabled
      },
      option: {
        lowercase,
        dense
      },
      values: {
        appearance,
        size,
        shape,
        align,
        adaptive: propAdaptive
      },
      ...useColor(color, palette)
    })

    const onClick = event => {
      let type = 'on-click'

      if (
        iconReadonly.value &&
        event.target.closest('.bt-trailing')
      ) {
        event.preventDefault()
        event.stopPropagation()
        type = 'on-trailing'
      }

      context.emit(type, {
        type,
        item: props.item,
        value: props.value || props.item?.value
      })
    }

    useAdmin('d-button')

    return {
      bindBadge,
      bindIcon,
      bindTrailing,
      classList,
      onClick
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
