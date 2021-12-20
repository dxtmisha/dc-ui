<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
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
import DSlider from '@/--components/DSlider'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
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
  },
  methods: {
    on (event) {
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss"></style>
