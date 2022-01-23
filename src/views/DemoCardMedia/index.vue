<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-card-media
      v-bind="binds"
      id="id-card-media"
      :admin="true"
      @on-click="on"
    />
  </interactive-demo>
</template>

<script>
import DCardMedia from '../../../components/DCardMedia'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsCardTitle } from './options'

export default {
  name: 'DemoCardMedia',
  components: {
    DCardMedia,
    InteractiveDemo
  },
  setup () {
    const options = optionsCardTitle
    return { options }
  }
}
</script>

<style lang="scss"></style>
