<template>
  <component
    :is="tag"
    v-bind="binds"
    class="d-button a-static"
    @click="onClick"
  >
    <d-progress v-if="isProgress" v-bind="bindProgress" type="circular"/>
    <d-icon v-if="icon" v-bind="bindIcon" class="d-button__icon bt-icon"/>
    <d-icon v-if="iconTrailing" v-bind="bindTrailing" class="d-button__icon bt-trailing"/>
    <span class="d-button__text">
      {{ text }}<slot/>
    </span>
    <d-badge v-if="badge" v-bind="bindBadge"/>
    <d-ripple v-if="isRipple"/>
  </component>
</template>

<script>
import DBadge from '@/components/DBadge'
import DIcon from '@/components/DIcon'
import DProgress from '@/components/DProgress'
import DRipple from '@/components/DRipple'
import { props } from './props'
import { computed, readonly, toRefs } from 'vue'
import attrBadge from '@/components/DBadge/attrBadge'
import attrProgress from '@/components/DProgress/attrProgress'
import attrRipple from '@/components/DRipple/attrRipple'
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
    const { disabled } = toRefs(props)
    const propValue = computed(() => props.value || props.item?.value)
    const propAdaptive = computed(() => {
      if (!(props.text || 'default' in context.slots)) {
        return 'icon'
      } else if (props.icon || props.iconTrailing || ['basic', 'block'].indexOf(props.adaptive) !== -1) {
        return props.adaptive
      } else {
        return 'basic'
      }
    })
    const propShape = computed(() => props.shape || (propAdaptive.value === 'icon' ? 'pill' : undefined))

    const bindBadge = attrBadge(props)

    const {
      bindIcon,
      bindTrailing
    } = useIcon(props, propAdaptive)

    const {
      isProgress,
      bindProgress
    } = attrProgress(props)

    const isRipple = attrRipple(props)

    const palette = useColor(props)
    const binds = readonly({
      class: computed(() => {
        return {
          'd-button a-static': true,
          'status-selected': props.selected,
          'status-dragged': props.dragged,
          'status-readonly': props.readonly,
          'status-disabled': props.disabled,
          'status-hide': props.hide,
          [`appearance-${props.appearance}`]: props.appearance,
          [`size-${props.size}`]: props.size,
          [`shape-${propShape.value}`]: propShape.value,
          [`align-${props.align}`]: props.align,
          [`adaptive-${propAdaptive.value}`]: propAdaptive.value,
          'option-lowercase': props.lowercase,
          'option-dense': props.dense,
          'option-ellipsis': props.ellipsis,
          ...palette.value
        }
      }),
      disabled,
      'data-value': propValue
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
          type = 'on-trailing'
        }

        context.emit(type, {
          type,
          item: props.item,
          value: propValue.value
        })
      }
    }

    useAdmin('d-button', context)

    return {
      isRipple,
      isProgress,

      bindBadge,
      bindIcon,
      bindTrailing,
      bindProgress,
      binds,

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
