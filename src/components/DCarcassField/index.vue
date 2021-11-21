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
          <d-icon
            v-if="ifCancel"
            class="d-carcass-field__icon window-control-static cf-cancel"
            :icon="iconCancel"
            :disabled="disabled"
            size="small"
            @click.stop="onClick('on-cancel')"
          />
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
import DRipple from '@/components/DRipple'
import { props } from '@/components/DCarcassField/props'
import { ref, toRefs } from 'vue'
import { getIdElement } from '@/tool/functions'
import { useAdmin } from '@/uses/useAdmin'
import { usePrefix } from '@/components/DCarcassField/usePrefix'
import { useWatch } from '@/uses/useWatch'
import DProgress from '@/components/DProgress'

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
    const {
      icon,
      iconTrailing,
      prefix,
      suffix,
      helperMessage,
      validationMessage,
      counterValue,
      maxlength,
      focus,
      active,
      selected,
      filled,
      readonly,
      disabled,
      disabledPrevious,
      disabledNext,
      arrow,
      appearance,
      size,
      shape,
      align,
      adaptive,
      counter,
      cancel
    } = toRefs(props)

    const id = `cf--${getIdElement()}`
    const field = ref(undefined)

    const counterMessage = useWatch([counterValue, maxlength], data => {
      data.value = (counterValue.value || '0') + (maxlength.value ? ` / ${maxlength.value}` : '')
    })

    const ifCancel = useWatch([
      cancel,
      filled,
      readonly,
      disabled,
      arrow,
      align
    ], data => {
      data.value = cancel.value &&
        filled.value &&
        !readonly.value &&
        !disabled.value &&
        !arrow.value &&
        align.value !== 'center'
    })
    const ifMessage = useWatch([
      helperMessage,
      validationMessage,
      disabled,
      counter
    ], data => {
      data.value = (helperMessage.value || validationMessage.value || counter.value) && !disabled.value
    })

    const classList = useWatch([
      icon,
      ifCancel,
      iconTrailing,
      prefix,
      suffix,
      validationMessage,
      focus,
      active,
      selected,
      readonly,
      disabled,
      arrow,
      appearance,
      size,
      shape,
      align,
      adaptive
    ], data => {
      data.value = {
        'd-carcass-field': true,
        'view-icon': icon.value || arrow.value,
        'view-icon-cancel': ifCancel.value,
        'view-icon-trailing': iconTrailing.value || arrow.value,
        'view-prefix': prefix.value,
        'view-suffix': suffix.value,
        'status-focus': focus.value,
        'status-active': active.value,
        'status-selected': selected.value,
        'status-validation': validationMessage.value,
        'status-readonly': readonly.value,
        'status-disabled': disabled.value,
        'option-arrow': arrow.value,
        [`appearance-${appearance.value}`]: appearance.value,
        [`size-${size.value}`]: size.value,
        [`shape-${shape.value}`]: shape.value,
        [`align-${align.value}`]: align.value,
        [`adaptive-${adaptive.value}`]: adaptive.value
      }
    })

    const onClick = (type) => {
      let value

      switch (type) {
        case 'on-previous':
          value = disabledPrevious.value || disabled.value
          break
        case 'on-next':
          value = disabledNext.value || disabled.value
          break
        default:
          value = disabled.value
          break
      }

      if (!value) {
        context.emit(type)
      }
    }

    usePrefix(
      field,
      prefix,
      suffix
    )

    useAdmin('d-carcass-field')

    return {
      id,
      field,
      counterMessage,
      ifCancel,
      ifMessage,
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
