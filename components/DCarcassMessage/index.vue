<template>
  <div v-if="ifMessage" class="d-carcass-message">
    <div class="d-carcass-message__info">
      <div v-if="validationMessage" class="d-carcass-message__validation">{{ validationMessage }}</div>
      <div v-else-if="helperMessage" class="d-carcass-message__helper">{{ helperMessage }}</div>
    </div>
    <div v-if="counter" class="d-carcass-message__counter">{{ counterMessage }}</div>
  </div>
</template>

<script>
import { props } from './props'
import { computed } from 'vue'
import useAdmin from '../../uses/useAdmin'

export default {
  name: 'DCarcassMessage',
  props,
  setup (props, context) {
    const ifMessage = computed(() => (props.helperMessage || props.validationMessage || props.counter) && !props.disabled)
    const counterMessage = computed(() => (props.counterValue || '0') + (props.maxlength ? ` / ${props.maxlength}` : ''))

    useAdmin('d-carcass-message', context)

    return {
      ifMessage,
      counterMessage
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-carcass-message {
  @include carcassMessageInit;
}
</style>
