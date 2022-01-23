<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-checkbox
      v-bind="binds"
      id="id-checkbox"
      name="interactive-demo"
      :admin="true"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DCheckbox from '../../../components/DCheckbox'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsCheckbox } from './options'

export default {
  name: 'DemoCheckbox',
  components: {
    DCheckbox,
    InteractiveDemo
  },
  setup () {
    const options = optionsCheckbox
    return { options }
  }
}
</script>

<style lang="scss"></style>
