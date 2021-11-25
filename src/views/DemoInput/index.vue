<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-input
      v-bind="binds"
      @on-input="onInput"
      @on-change="onInput"
    />
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
    const onInput = event => console.log('event', event)

    return {
      options,
      onInput
    }
  }
}
</script>

<style lang="scss"></style>
