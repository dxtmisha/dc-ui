<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
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
import DTextarea from '@/--components/DTextarea'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
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
  },
  methods: {
    on (event) {
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss"></style>
