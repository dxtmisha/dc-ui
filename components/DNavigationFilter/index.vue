<template>
  <d-navigation
    ref="navigation"
    class="d-navigation-filter"
    v-bind="bindNavigation"
  >
    <template v-slot:default>
      <slot name="before"/>
      <d-form
        ref="form"
        :fields="fields"
        :values="values"
        class="d-navigation-filter__form"
        v-bind="bindForm"
        @on-bar="clear"
        @on-input="onInput"
        @on-submit="show(false)"
      />
      <slot name="after"/>
    </template>
  </d-navigation>
</template>

<script>
import DForm from '../DForm'
import DNavigation from '../DNavigation'
import { props } from './props'
import { ref } from 'vue'
import attrNavigation from '../DNavigation/attrNavigation'
import useAdmin from '../../uses/useAdmin'
import useForm from './useForm'
import useValues from './useValues'

export default {
  name: 'DNavigationFilter',
  components: {
    DForm,
    DNavigation
  },
  emit: ['on-input'],
  props,
  setup (props, context) {
    const navigation = ref(undefined)
    const form = ref(undefined)

    const {
      values,
      valuesByItem,
      set,
      clear
    } = useValues(props, context, form)

    useAdmin('d-navigation-filter', context)

    return {
      navigation,
      form,
      values,
      valuesByItem,
      bindNavigation: attrNavigation({ props }),
      bindForm: useForm(props),
      set,
      clear,
      show: value => navigation.value?.show(value),
      onInput: event => set(event)
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-navigation-filter {
  @include navigationFilterInit;
}
</style>
