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
import DBadge from './../DBadge'
import DIcon from './../DIcon'
import DProgress from './../DProgress'
import DRipple from './../DRipple'
import { props } from './props'
import { computed } from 'vue'
import attrBadge from './../DBadge/attrBadge'
import attrProgress from './../DProgress/attrProgress'
import attrRipple from './../DRipple/attrRipple'
import useAdmin from './../../uses/useAdmin'
import useColor from './../../uses/useColor'
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
    const propShape = computed(() => props.shape || (propAdaptive.value === 'icon' ? 'icon' : undefined))

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
    const binds = computed(() => {
      return {
        class: {
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
        },
        disabled: props.disabled,
        'data-value': propValue.value
      }
    })

    useAdmin('d-button', context, propValue)

    return {
      isRipple,
      isProgress,

      propValue,

      bindBadge,
      bindIcon,
      bindTrailing,
      bindProgress,
      binds
    }
  },
  methods: {
    onClick (event) {
      let type = 'on-click'

      if (
        this.readonly ||
        this.disabled ||
        this.progress
      ) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        if (
          this.iconReadonly &&
          event.target.closest('.bt-trailing')
        ) {
          event.preventDefault()
          event.stopPropagation()
          type = 'on-trailing'
        } else if (this.to && this?.$router) {
          this.$router.push(this.to)
          return
        }

        this.$emit(type, {
          type,
          item: this.item,
          value: this.propValue
        })
      }
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
