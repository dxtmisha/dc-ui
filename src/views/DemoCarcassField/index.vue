<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-carcass-field
      v-bind="binds"
      id="id-carcass-field"
      :active="active"
      :filled="active"
      :admin="true"
    >
      <template v-slot:default="{ className }">
        <input
          ref="input"
          type="text"
          :class="className"
          :readonly="binds?.readonly"
          :disabled="binds?.disabled"
          @input="onInput"
        >
      </template>
    </d-carcass-field>
  </interactive-demo>
</template>

<script>
import DCarcassField from '../../../components/DCarcassField'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import { optionsCarcassField } from './options'

export default {
  name: 'DemoCarcassField',
  components: {
    DCarcassField,
    InteractiveDemo
  },
  setup () {
    const options = optionsCarcassField
    const input = ref(undefined)
    const active = ref(undefined)

    const onInput = () => {
      active.value = !!input.value.value
    }

    return {
      input,
      options,
      active,
      onInput
    }
  }
}
</script>

<style lang="scss"></style>
