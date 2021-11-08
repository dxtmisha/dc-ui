<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-button v-bind="binds"/>
  </interactive-demo>
</template>

<script>
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsButton } from '@/views/DemoButton/options'
import DButton from '@/components/DButton'

export default {
  name: 'DemoButton',
  components: {
    DButton,
    InteractiveDemo
  },
  setup () {
    const options = optionsButton
    return { options }
  }
}
</script>

<style lang="scss"></style>
