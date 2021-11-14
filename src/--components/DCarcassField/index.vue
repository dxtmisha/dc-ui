<template>
  <div class="d-carcass-field" :class="classList" :style="styleList">
    <label
      v-if="appearance === 'classic'"
      class="d-carcass-field__label--classic"
    >
      {{ text }}<span v-if="required" class="d-carcass-field__required"/>
    </label>
    <div :class="classBody">
      <slot
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
          @click="onClick('on-previous')"
        >
          <d-ripple v-if="ripple" :disabled="disabled || disabledPrevious"/>
        </d-icon>
        <d-icon
          v-else-if="icon"
          v-bind="mixinIcon"
          class="d-carcass-field__icon cf-icon"
          size="small"
        />
      </label>
    </div>
  </div>
</template>

<script>
import DIcon from '@/--components/DIcon'
import DRipple from '@/--components/DRipple'
import { props } from '@/--components/DCarcassField/props'
import { usePrefix } from '@/--components/DCarcassField/usePrefix'

export default {
  name: 'DCarcassField',
  components: {
    DIcon,
    DRipple
  },
  props,
  emits: ['on-cancel', 'on-previous', 'on-next'],
  setup (props) {
    const {
      prefixItem,
      suffixItem,
      styleList
    } = usePrefix(props)

    return {
      prefixItem,
      suffixItem,
      styleList
    }
  },
  computed: {
    ifCancel () {
      return this.cancel &&
        this.value &&
        this.align !== 'center' &&
        !(this.arrow && !this.align) &&
        !(this.disabled) &&
        !(this.readonly)
    },
    ifMessage () {
      return (this.helperMessage || this.validationMessage || this.counter) && !this.disabled
    },
    valueCounter () {
      return this.counterValue + (this.maxlength ? ` / ${this.maxlength}` : '')
    },
    classList () {
      return {
        'd-carcass-field': true,
        'view-value': this.isValue,
        'view-icon': this.icon || this.arrow,
        'view-icon-cancel': this.ifCancel,
        'view-icon-trailing': this.iconTrailing || this.arrow,
        'view-prefix': this.prefix,
        'view-suffix': this.suffix,
        'status-focus': this.focus && !this.disabled,
        'status-selected': this.selected,
        'status-validation': this.validationMessage,
        'status-readonly': this.readonly,
        'status-disabled': this.disabled,
        [`appearance-${this.appearance}`]: this.appearance,
        [`adaptive-${this.adaptive}`]: this.adaptive,
        [`size-${this.size}`]: this.size,
        [`align-${this.align}`]: this.align,
        'option-arrow': this.arrow,
        'option-ripple': this.ripple
      }
    },
    classBody () {
      return {
        'd-carcass-field__body': true,
        [`shape-${this.shape}`]: this.shape
      }
    }
  },
  methods: {
    onClick (type) {
      let disabled = this.disabled

      switch (type) {
        case 'on-previous':
          disabled = this.disabledPrevious || disabled
          break
        case 'on-next':
          disabled = this.disabledNext || disabled
      }

      if (!disabled) {
        this.$emit(type)
      }
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
