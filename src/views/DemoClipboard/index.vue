<template>
  <interactive-demo
      :options="options"
      v-slot:default="{ binds, on }"
  >
    <d-clipboard
        v-bind="binds"
        id="id-clipboard"
        name="interactive-demo"
        :admin="true"
        @on-clipboard="on"
    />
  </interactive-demo>
</template>

<script>
import DClipboard from '../../../components/DClipboard'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsClipboard } from './options'

export default {
  name: 'DemoClipboard',
  components: {
    DClipboard,
    InteractiveDemo
  },
  setup () {
    const options = optionsClipboard
    return { options }
  }
}
</script>

<style lang="scss"></style>
