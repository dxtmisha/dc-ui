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
    <d-icon v-if="iconTrailing" v-bind="bindTrailing"/>
    <span class="d-button__text">
      {{ text }}<slot/>
    </span>
    <d-badge
      v-if="badge"
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
import { props } from './props'
import { computed } from 'vue'
import setupBadge from '@/components/DBadge/setupBadge'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/uses/useColor'
import useIcon from './useIcon'

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
    const palette = useColor(props)
    const propAdaptive = computed(() => props.text || 'default' in context.slots ? props.adaptive : 'icon')

    const {
      bindIcon,
      bindTrailing
    } = useIcon(props, propAdaptive)
    const { bindBadge } = setupBadge(props)

    const classList = computed(() => {
      return {
        'd-button a-static': true,
        'status-selected': props.selected,
        'status-dragged': props.dragged,
        'status-readonly': props.readonly,
        'status-disabled': props.disabled,
        [`appearance-${props.appearance}`]: props.appearance,
        [`size-${props.size}`]: props.size,
        [`shape-${props.shape}`]: props.shape,
        [`align-${props.align}`]: props.align,
        [`adaptive-${propAdaptive.value}`]: propAdaptive.value,
        'option-lowercase': props.lowercase,
        'option-dense': props.dense,
        ...palette.value
      }
    })

    const onClick = event => {
      let type = 'on-click'

      if (
        props.iconReadonly &&
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

    useAdmin('d-button', context)

    return {
      bindIcon,
      bindTrailing,
      bindBadge,
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
