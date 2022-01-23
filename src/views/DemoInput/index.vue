<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-input
      v-bind="binds"
      id="id-input"
      name="interactive-demo"
      :admin="true"
      @on-input="on"
      @on-change="on"
    />
  </interactive-demo>
</template>

<script>
import DInput from '../../../components/DInput'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsInput } from './options'

export default {
  name: 'DemoInput',
  components: {
    DInput,
    InteractiveDemo
  },
  setup () {
    const options = optionsInput
    return { options }
  }
}
</script>

<style lang="scss"></style>
