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
    <d-ripple v-if="isRipple"/>
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
import setupRipple from '@/components/DRipple/setupRipple'
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
    const propAdaptive = computed(() => {
      if (!(props.text || 'default' in context.slots)) {
        return 'icon'
      } else if (props.icon || props.iconTrailing || ['basic', 'block'].indexOf(props.adaptive) !== -1) {
        return props.adaptive
      } else {
        return 'basic'
      }
    })

    const { isRipple } = setupRipple(props)

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
        'status-hide': props.hide,
        [`appearance-${props.appearance}`]: props.appearance,
        [`size-${props.size}`]: props.size,
        [`shape-${props.shape}`]: props.shape,
        [`align-${props.align}`]: props.align,
        [`adaptive-${propAdaptive.value}`]: propAdaptive.value,
        'option-lowercase': props.lowercase,
        'option-dense': props.dense,
        'option-ellipsis': props.ellipsis,
        ...palette.value
      }
    })

    const onClick = event => {
      let type = 'on-click'

      if (
        props.readonly ||
        props.disabled ||
        props.progress
      ) {
        event.preventDefault()
        event.stopPropagation()
      } else {
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
    }

    useAdmin('d-button', context)

    return {
      isRipple,
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
