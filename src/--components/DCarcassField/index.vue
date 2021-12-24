<template>
  <div ref="field" :class="classList">
    <label
      v-if="appearance === 'classic'"
      class="d-carcass-field__label--classic"
    >
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
          class="d-carcass-field__icon window-control-static cf-icon"
          :icon="iconChevronLeft"
          :disabled="disabled || disabledPrevious"
          size="small"
          :background="true"
          @click.stop="onClick('on-previous')"
        >
          <d-ripple v-if="ripple && !disabled && !disabledPrevious"/>
        </d-icon>
        <d-icon
          v-else-if="icon"
          class="d-carcass-field__icon cf-icon"
          :icon="icon"
          :icon-active="iconActive"
          :active="selected"
          :disabled="disabled"
          size="small"
        />
        <span v-if="prefix" ref="prefix" class="d-carcass-field__prefix cf-prefix">{{ prefix }}</span>
        <span class="d-carcass-field__space"/>
        <span v-if="suffix" ref="suffix" class="d-carcass-field__suffix cf-suffix">{{ suffix }}</span>
        <d-icon
          v-if="arrow"
          class="d-carcass-field__icon window-control-static cf-trailing"
          :icon="iconChevronRight"
          :disabled="disabled || disabledNext"
          size="small"
          :background="true"
          @click.stop="onClick('on-next')"
        >
          <d-ripple v-if="ripple && !disabled && !disabledNext"/>
        </d-icon>
        <template v-else>
          <keep-alive>
            <d-icon
              v-if="ifCancel"
              class="d-carcass-field__icon window-control-static cf-cancel"
              :icon="iconCancel"
              :disabled="disabled"
              size="small"
              @click.stop="onClick('on-cancel')"
            />
          </keep-alive>
          <d-icon
            v-if="iconTrailing"
            class="d-carcass-field__icon cf-trailing"
            :icon="iconTrailing"
            :turn="turn"
            :disabled="disabled"
            size="small"
          />
        </template>
      </label>
      <div class="d-carcass-field__border"/>
      <d-progress
        v-if="progress && !disabled"
        :visible="progress"
        :bottom="true"
      />
    </div>
    <div v-if="ifMessage" class="d-carcass-field__message">
      <div class="d-carcass-field__info">
        <div v-if="validationMessage" class="d-carcass-field__validation">{{ validationMessage }}</div>
        <div v-else-if="helperMessage" class="d-carcass-field__helper">{{ helperMessage }}</div>
      </div>
      <div v-if="counter" class="d-carcass-field__counter">{{ counterMessage }}</div>
    </div>
  </div>
</template>

<script>
import DIcon from '@/components/DIcon'
import DProgress from '@/components/DProgress'
import DRipple from '@/components/DRipple'
import { props } from './props'
import { computed, ref } from 'vue'
import getIdElement from '@/functions/getIdElement'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/uses/useColor'
import usePrefix from './usePrefix'

export default {
  name: 'DCarcassField',
  components: {
    DProgress,
    DRipple,
    DIcon
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

    const counterMessage = computed(() => (props.counterValue || '0') + (props.maxlength ? ` / ${props.maxlength}` : ''))

    const ifMessage = computed(() => (props.helperMessage || props.validationMessage || props.counter) && !props.disabled)
    const ifCancel = computed(() => {
      return props.cancel &&
        props.filled &&
        !props.readonly &&
        !props.disabled &&
        !props.arrow &&
        props.align !== 'center'
    })

    const palette = useColor(props)
    const classList = computed(() => {
      return {
        'd-carcass-field': true,
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
      counterMessage,
      ifMessage,
      ifCancel,
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
