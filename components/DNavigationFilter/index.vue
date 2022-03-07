<template>
  <d-navigation
    ref="navigation"
    class="d-navigation-filter"
    v-bind="bindNavigation"
  >
    <template v-slot:default>
      <slot name="before"/>
      <div class="px-2 py-4">
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
      </div>
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
  props,
  setup (props, context) {
    const navigation = ref(undefined)

    const {
      values,
      set,
      clear
    } = useValues(props, context)

    useAdmin('d-navigation-filter', context)

    return {
      navigation,
      values,
      bindNavigation: attrNavigation({ props }),
      bindForm: useForm(props),
      set,
      clear,
      show: value => navigation.value?.show(value),
      onInput: ({ values }) => set(values)
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
