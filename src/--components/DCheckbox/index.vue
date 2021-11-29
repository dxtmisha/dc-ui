<template>
  <label :class="classList">
    <input :name="name" type="hidden" value="0">
    <input
      ref="input"
      v-bind="attrsInput"
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
        <d-ripple v-if="ripple && !disabled"/>
      </span>
    </span>
    <span v-else class="d-checkbox__item">
      <span class="d-checkbox__icon">
        <d-icon-item class="cb-icon" :icon="propIcon"/>
      </span>
      <d-ripple v-if="ripple && !disabled"/>
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
import { props } from '@/--components/DCheckbox/props'
import { ref, toRefs } from 'vue'
import { setupInput } from '@/--components/DInput/setupInput'
import { useClasses } from '@/--uses/useClasses'
import { useColor } from '@/--uses/useColor'
import { useWatch } from '@/--uses/useWatch'

export default {
  name: 'DCheckbox',
  components: {
    DIconItem,
    DRipple
  },
  props,
  emits: ['on-input'],
  setup (props, context) {
    const refs = toRefs(props)
    const {
      item,
      value,
      name,
      text,
      validationMessage,
      required,
      palette,
      color,
      type,
      right,
      iconCheck
    } = refs

    const input = ref(undefined)

    const propIcon = ref(iconCheck.value)
    const propType = useWatch(type, data => {
      data.value = type.value === 'radio' ? 'radio' : 'checkbox'
      propIcon.value = type.value === 'radio' ? '' : iconCheck.value
    })

    const ifText = useWatch(text, data => {
      data.value = text.value || 'default' in context.slots
    })

    const {
      propValue,
      propValidationMessage,
      checkValidity,
      onChecked
    } = setupInput(
      input,
      undefined,
      item,
      value,
      name,
      validationMessage,
      context
    )

    const classList = useClasses({
      'd-checkbox': true,
      status: {
        checked: propValue,
        error: propValidationMessage
      },
      option: {
        required,
        right
      },
      values: { type },
      ...useColor(color, palette)
    })

    return {
      input,
      propValue,
      propType,
      propIcon,
      propValidationMessage,
      ifText,
      classList,
      checkValidity,
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
