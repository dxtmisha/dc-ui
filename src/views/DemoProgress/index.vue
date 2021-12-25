<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-progress
      v-bind="binds"
      id="id-progress"
      :admin="true"
    />
  </interactive-demo>
</template>

<script>
import DProgress from '@/components/DProgress'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsProgress } from './options'

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
