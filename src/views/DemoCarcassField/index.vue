<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-carcass-field v-bind="binds"/>
  </interactive-demo>
</template>

<script>
import DCarcassField from '@/components/DCarcassField'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsCarcassField } from '@/views/DemoCarcassField/options'

export default {
  name: 'DemoCarcassField',
  components: {
    DCarcassField,
    InteractiveDemo
  },
  setup () {
    const options = optionsCarcassField
    return { options }
  }
}
</script>

<style lang="scss"></style>
