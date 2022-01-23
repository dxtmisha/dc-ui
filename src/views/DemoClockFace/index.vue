<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-clock-face
      v-bind="binds"
      id="id-button"
      :admin="true"
      @on-input="on"
      @on-change="on"
    />
  </interactive-demo>
</template>

<script>
import DClockFace from '../../../components/DClockFace'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsClockFace } from './options'

export default {
  name: 'DemoClockFace',
  components: {
    DClockFace,
    InteractiveDemo
  },
  setup () {
    const options = optionsClockFace
    return { options }
  }
}
</script>

<style lang="scss"></style>
