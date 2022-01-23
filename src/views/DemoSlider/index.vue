<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-slider
      v-bind="binds"
      id="id-slider"
      name="interactive-demo"
      :admin="true"
      @on-input="on"
      @on-change="on"
    />
  </interactive-demo>
</template>

<script>
import DSlider from '../../../components/DSlider'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsSlider } from './options'

export default {
  name: 'DemoSlider',
  components: {
    DSlider,
    InteractiveDemo
  },
  setup () {
    const options = optionsSlider
    return { options }
  }
}
</script>

<style lang="scss"></style>
