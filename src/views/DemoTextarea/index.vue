<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-textarea
      v-bind="binds"
      @on-input="onInput"
      @on-change="onInput"
    />
  </interactive-demo>
</template>

<script>
import DTextarea from '@/components/DTextarea'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsTextarea } from '@/views/DemoTextarea/options'

export default {
  name: 'DemoTextarea',
  components: {
    DTextarea,
    InteractiveDemo
  },
  setup () {
    const options = optionsTextarea
    const onInput = event => console.log('event', event)

    return {
      options,
      onInput
    }
  }
}
</script>

<style lang="scss"></style>
