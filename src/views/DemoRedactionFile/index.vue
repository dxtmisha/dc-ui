<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
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
import DRedactionFile from '../../../components/DRedactionFile'
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
  }
}
</script>

<style lang="scss"></style>
