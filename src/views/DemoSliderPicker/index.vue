<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-slider-picker
      v-bind="binds"
      id="id-slider-picker"
      name="interactive-demo"
      :admin="true"
      @on-input="on"
      @on-change="on"
    />
  </interactive-demo>
</template>

<script>
import DSliderPicker from '../../../components/DSliderPicker'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsSliderPicker } from './options'

export default {
  name: 'DemoSliderPicker',
  components: {
    DSliderPicker,
    InteractiveDemo
  },
  setup () {
    const options = optionsSliderPicker
    return { options }
  }
}
</script>

<style lang="scss"></style>
