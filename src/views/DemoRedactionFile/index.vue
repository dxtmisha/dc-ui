<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-redaction-file
      v-bind="binds"
      id="id-redaction-file"
      :admin="true"
      @on-resize="on"
    />
  </interactive-demo>
</template>

<script>
import DRedactionFile from '@/components/DRedactionFile'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsRedactionFile } from './options'

export default {
  name: 'DemoRedactionFile',
  components: {
    DRedactionFile,
    InteractiveDemo
  },
  setup () {
    const options = optionsRedactionFile
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
