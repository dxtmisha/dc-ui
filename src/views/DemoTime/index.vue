<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-time
      v-bind="binds"
      id="id-time"
      name="interactive-demo"
      :admin="true"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DTime from '../../../components/DTime'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsTime } from './options'

export default {
  name: 'DemoTime',
  components: {
    DTime,
    InteractiveDemo
  },
  setup () {
    const options = optionsTime

    return { options }
  }
}
</script>

<style lang="scss"></style>
