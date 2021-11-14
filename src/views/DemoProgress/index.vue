<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-progress v-bind="binds"/>
  </interactive-demo>
</template>

<script>
import DProgress from '@/--components/DProgress'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { optionsProgress } from '@/views/DemoProgress/options'

export default {
  name: 'DemoProgress',
  components: {
    DProgress,
    InteractiveDemo
  },
  setup () {
    const options = optionsProgress
    return { options }
  }
}
</script>

<style lang="scss"></style>
