<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-list-format :value="value" v-bind="binds"/>
  </interactive-demo>
</template>

<script>
import DListFormat from '../../../components/DListFormat'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsListFormat } from './options'

export default {
  name: 'DemoListFormat',
  components: {
    DListFormat,
    InteractiveDemo
  },
  setup () {
    const options = optionsListFormat
    const value = ['Motorcycle', 'Bus', 'Car']
    return {
      options,
      value
    }
  }
}
</script>

<style lang="scss">
.demo-dialog {
  max-width: 640px;
}
</style>
