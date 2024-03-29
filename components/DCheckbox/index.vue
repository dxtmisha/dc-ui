<template>
  <label :class="classList" class="d-checkbox">
    <input v-if="propType !== 'radio'" :name="name" type="hidden" value="0">
    <input
      ref="input"
      v-bind="inputAttrs"
      :checked="propValue === true"
      :disabled="disabled"
      :name="name"
      :required="required"
      :type="propType"
      :value="valueDefault"
      class="d-checkbox__input"
      v-on="on"
      @input.prevent="onChecked"
    >
    <span v-if="type === 'switch'" class="d-checkbox__switch">
      <span class="d-checkbox__circle">
        <d-ripple v-if="isRipple"/>
      </span>
    </span>
    <span v-else class="d-checkbox__item">
      <span class="d-checkbox__icon">
        <d-icon-item class="cb-icon" :icon="propIcon"/>
      </span>
      <d-ripple v-if="isRipple"/>
    </span>
    <span v-if="ifText" class="d-checkbox__text">
      <span class="d-checkbox__title">
        {{ text }}<slot/>
        <span v-if="required" class="d-checkbox__required">*</span>
      </span>
      <span v-if="propValidationMessage" class="d-checkbox__message cb-validation">{{ propValidationMessage }}</span>
      <span v-else-if="helperMessage" class="d-checkbox__message">{{ helperMessage }}</span>
    </span>
  </label>
</template>

<script>
import DIconItem from '../DIconItem'
import DRipple from '../DRipple'
import { props } from './props'
import { computed, ref } from 'vue'
import attrRipple from '../DRipple/attrRipple'
import useAdmin from '../../uses/useAdmin'
import useColor from '../../uses/useColor'
import useField from '../../uses/useField'

export default {
  name: 'DCheckbox',
  components: {
    DIconItem,
    DRipple
  },
  props,
  emits: [
    'on-input',
    'update:value',
    'update:modelValue'
  ],
  setup (props, context) {
    const input = ref(undefined)

    const propType = computed(() => props.type === 'radio' ? 'radio' : 'checkbox')
    const propIcon = computed(() => props.type === 'radio' ? '' : props.iconCheck)

    const ifText = computed(() => props.text || 'default' in context.slots)
    const isRipple = attrRipple(props)

    const {
      propValidationMessage,
      propValue,
      checkValidity,
      setValue,
      setChange,
      onChecked
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const propValueItem = computed(() => {
      if (propValue.value) {
        return [{
          text: props.text,
          value: props.name,
          onHide: () => {
            input.value.checked = false
            onChecked()
          }
        }]
      } else {
        return []
      }
    })

    const palette = useColor(props)
    const classList = computed(() => {
      return {
        'status-checked': propValue.value,
        'status-error': propValidationMessage.value,
        [`type-${propType.value}`]: propType.value,
        'option-right': props.right,
        'option-required': props.required,
        'option-inverse': props.inverse,
        ...palette.value
      }
    })

    useAdmin('d-checkbox', context)

    return {
      input,

      ifText,
      isRipple,

      propValidationMessage,
      propValue,
      propValueItem,
      propType,
      propIcon,
      classList,

      checkValidity,
      setValue,
      setChange,

      onChecked
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-checkbox {
  @include checkboxInit;
}
</style>
