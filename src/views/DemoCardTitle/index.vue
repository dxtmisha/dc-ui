<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-card-title
      v-bind="binds"
      id="id-card-title"
      :admin="true"
      @on-click="on"
    />
  </interactive-demo>
</template>

<script>
import DCardTitle from '@/components/DCardTitle'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsCardMenu } from './options'

export default {
  name: 'DemoCardTitle',
  components: {
    DCardTitle,
    InteractiveDemo
  },
  setup () {
    const options = optionsCardMenu
    return { options }
  },
  methods: {
    on (event) {
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss"></style>
