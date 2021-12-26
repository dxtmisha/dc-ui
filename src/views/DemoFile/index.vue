<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <d-file
      v-bind="binds"
      id="id-file"
      name="interactive-demo"
      :admin="true"
      @on-input="on"
      @on-change="on"
    />
  </interactive-demo>
</template>

<script>
import DFile from '@/components/DFile'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsFile } from './options'

export default {
  name: 'DemoFile',
  components: {
    DFile,
    InteractiveDemo
  },
  setup () {
    const options = optionsFile
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
