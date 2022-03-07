<template>
  <div ref="field" class="d-carcass-field" :class="classList">
    <label v-if="appearance === 'classic'" class="d-carcass-field__label--classic">
      {{ text }}<span v-if="required" class="d-carcass-field__required"/>
    </label>
    <div class="d-carcass-field__body">
      <slot
        :id="id"
        class-name="d-carcass-field__input"
        class-name-hidden="d-carcass-field__hidden"
      />

      <div class="d-carcass-field__label">
        <div class="d-carcass-field__title">
          <label class="d-carcass-field__text">
            {{ text }}<span v-if="required" class="d-carcass-field__required"/>
          </label>
        </div>
      </div>

      <label class="d-carcass-field__scoreboard">
        <d-icon
          v-if="arrow"
          v-bind="bindPrevious"
          class="d-carcass-field__icon window-control-static cf-icon"
          @click.stop="onClick('on-previous')"
        >
          <d-ripple v-if="isRipple && !disabledPrevious"/>
        </d-icon>
        <d-icon v-else-if="icon" v-bind="bindIcon" class="d-carcass-field__icon cf-icon"/>

        <span v-if="prefix" ref="prefix" class="d-carcass-field__prefix cf-prefix">{{ prefix }}</span>
        <span class="d-carcass-field__space"/>
        <span v-if="suffix" ref="suffix" class="d-carcass-field__suffix cf-suffix">{{ suffix }}</span>

        <d-icon
          v-if="arrow"
          v-bind="bindNext"
          class="d-carcass-field__icon window-control-static cf-trailing"
          @click.stop="onClick('on-next')"
        >
          <d-ripple v-if="isRipple && !disabledNext"/>
        </d-icon>
        <template v-else>
          <keep-alive>
            <d-icon
              v-if="ifCancel"
              v-bind="bindCancel"
              class="d-carcass-field__icon window-control-static cf-cancel"
              @click.stop="onClick('on-cancel')"
            />
          </keep-alive>
          <d-icon v-if="iconTrailing" v-bind="bindTrailing" class="d-carcass-field__icon cf-trailing"/>
        </template>
      </label>

      <div class="d-carcass-field__border"/>
      <d-progress v-if="isProgress" v-bind="bindProgress" :bottom="true"/>
    </div>

    <d-carcass-message
      :counter="counter"
      :counter-value="counterValue"
      :disabled="disabled"
      :helper-message="helperMessage"
      :maxlength="maxlength"
      :validation-message="validationMessage"
    />
  </div>
</template>

<script>
import DCarcassMessage from '../DCarcassMessage'
import DIcon from '../DIcon'
import DProgress from '../DProgress'
import DRipple from '../DRipple'
import { props } from './props'
import { computed, ref } from 'vue'
import getIdElement from './../../functions/getIdElement'
import attrProgress from '../DProgress/attrProgress'
import attrRipple from '../DRipple/attrRipple'
import useAdmin from '../../uses/useAdmin'
import useColor from '../../uses/useColor'
import useIcon from './useIcon'
import usePrefix from './usePrefix'

export default {
  name: 'DCarcassField',
  components: {
    DCarcassMessage,
    DIcon,
    DProgress,
    DRipple
  },
  props,
  emits: [
    'on-previous',
    'on-next',
    'on-cancel'
  ],
  setup (props, context) {
    const id = `cf--${getIdElement()}`
    const field = ref(undefined)

    const ifCancel = computed(() => {
      return props.cancel &&
        props.filled &&
        !props.readonly &&
        !props.disabled &&
        !props.arrow &&
        props.align !== 'center'
    })

    const {
      bindIcon,
      bindTrailing,
      bindCancel,
      bindPrevious,
      bindNext
    } = useIcon(props)

    const {
      isProgress,
      bindProgress
    } = attrProgress(props)

    const isRipple = attrRipple(props)

    const palette = useColor(props)
    const classList = computed(() => {
      return {
        'view-icon': props.icon || props.arrow,
        'view-icon-cancel': ifCancel.value,
        'view-icon-trailing': props.iconTrailing || props.arrow,
        'view-prefix': props.prefix,
        'view-suffix': props.suffix,
        'status-focus': props.focus,
        'status-active': props.active,
        'status-selected': props.selected,
        'status-validation': props.validationMessage,
        'status-readonly': props.readonly,
        'status-disabled': props.disabled,
        [`appearance-${props.appearance}`]: props.appearance,
        [`size-${props.size}`]: props.size,
        [`shape-${props.shape}`]: props.shape,
        [`align-${props.align}`]: props.align,
        [`adaptive-${props.adaptive}`]: props.adaptive,
        'option-arrow': props.arrow,
        ...palette.value
      }
    })

    const onClick = (type) => {
      let value

      switch (type) {
        case 'on-previous':
          value = props.disabledPrevious || props.disabled
          break
        case 'on-next':
          value = props.disabledNext || props.disabled
          break
        default:
          value = props.disabled
          break
      }

      if (!value) {
        context.emit(type)
      }
    }

    usePrefix(field, props)
    useAdmin('d-carcass-field', context)

    return {
      id,
      field,

      ifCancel,
      isProgress,
      isRipple,

      bindIcon,
      bindTrailing,
      bindCancel,
      bindPrevious,
      bindNext,
      bindProgress,
      classList,

      onClick
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-carcass-field {
  @include carcassFieldInit;
}
</style>
