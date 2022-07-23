<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <div>
      <d-checkbox
        v-bind="binds"
        id="id-checkbox-1"
        name="interactive-demo"
        :admin="true"
        value-default="1"
        @on-input="on"
      />
      <div/>
      <d-checkbox
        v-bind="binds"
        id="id-checkbox-2"
        name="interactive-demo"
        :admin="true"
        value-default="2"
        @on-input="on"
      />
      <div/>
      <d-checkbox
        v-bind="binds"
        id="id-checkbox-3"
        name="interactive-demo"
        :admin="true"
        value-default="3"
        @on-input="on"
      />
    </div>
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
