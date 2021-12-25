<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
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
import DSliderPicker from '@/--components/DSliderPicker'
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
  },
  methods: {
    on (event) {
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss"></style>
