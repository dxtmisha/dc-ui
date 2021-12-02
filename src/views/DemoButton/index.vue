<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-button
      v-bind="binds"
      id="id-button"
      :admin="true"
    />
  </interactive-demo>
</template>

<script>
import DButton from '@/components/DButton'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { optionsButton } from './options'

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
