<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-date-picker
      v-bind="binds"
      id="id-date-picker"
      class="border"
      :admin="true"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DDatePicker from '../../../components/DDatePicker'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsDatePicker } from './options'

export default {
  name: 'DemoDatePicker',
  components: {
    DDatePicker,
    InteractiveDemo
  },
  setup () {
    const options = optionsDatePicker
    return { options }
  }
}
</script>

<style lang="scss"></style>
