<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-textarea
      v-bind="binds"
      id="id-textarea"
      name="interactive-demo"
      :admin="true"
      @on-input="on"
      @on-change="on"
    />
  </interactive-demo>
</template>

<script>
import DTextarea from '../../../components/DTextarea'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsTextarea } from './options'

export default {
  name: 'DemoTextarea',
  components: {
    DTextarea,
    InteractiveDemo
  },
  setup () {
    const options = optionsTextarea
    return { options }
  }
}
</script>

<style lang="scss"></style>
