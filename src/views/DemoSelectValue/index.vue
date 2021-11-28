<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-select-value v-bind="binds"/>
  </interactive-demo>
</template>

<script>
import DSelectValue from '@/--components/DSelectValue'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { optionsSelectValue } from '@/views/DemoSelectValue/options'

export default {
  name: 'DemoSelectValue',
  components: {
    DSelectValue,
    InteractiveDemo
  },
  setup () {
    const options = optionsSelectValue
    return { options }
  }
}
</script>

<style lang="scss"></style>
