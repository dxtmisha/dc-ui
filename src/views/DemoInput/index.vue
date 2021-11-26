<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-input v-bind="binds"/>
  </interactive-demo>
</template>

<script>
import DInput from '@/components/DInput'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsInput } from '@/views/DemoInput/options'

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
