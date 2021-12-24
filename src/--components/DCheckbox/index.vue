<template>
  <label class="d-checkbox" :class="classList">
    <input :name="name" type="hidden" value="0">
    <input
      ref="input"
      v-bind="inputAttrs"
      class="d-checkbox__input"
      value="1"
      :name="name"
      :disabled="disabled"
      :type="propType"
      :required="required"
      v-model="propValue"
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
import DIconItem from '@/components/DIconItem'
import DRipple from '@/components/DRipple'
import { props } from './props'
import { computed, ref } from 'vue'
import attrRipple from '@/components/DRipple/attrRipple'
import useAdmin from '@/uses/useAdmin'
import useColor from '@/uses/useColor'
import useField from '@/uses/useField'

export default {
  name: 'DCheckbox',
  components: {
    DIconItem,
    DRipple
  },
  props,
  emits: ['on-input'],
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
      setChange,
      onChecked
    } = useField(
      input,
      undefined,
      props,
      context
    )

    const palette = useColor(props)
    const classList = computed(() => {
      return {
        'status-checked': propValue.value,
        'status-error': propValidationMessage.value,
        [`type-${propType.value}`]: propType.value,
        'option-right': props.right,
        'option-required': props.required,
        ...palette.value
      }
    })

    useAdmin('d-checkbox', context)

    return {
      input,
      ifText,
      isRipple,
      propType,
      propIcon,
      propValidationMessage,
      propValue,
      classList,
      checkValidity,
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
