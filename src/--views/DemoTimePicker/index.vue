<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-time-picker
      v-bind="binds"
      id="id-time-picker"
      class="border"
      name="interactive-demo"
      :admin="true"
      @on-input="on"
      @on-change="on"
    />
  </interactive-demo>
</template>

<script>
import DTimePicker from '@/--components/DTimePicker'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { optionsTimePicker } from './options'

export default {
  name: 'DemoTimePicker',
  components: {
    DTimePicker,
    InteractiveDemo
  },
  setup () {
    const options = optionsTimePicker
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
