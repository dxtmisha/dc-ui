<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-card
      v-bind="binds"
      class="demo-card"
      id="id-card-title"
      :admin="true"
      :bar="bar"
      :bar-action="barAction"
    />
  </interactive-demo>
</template>

<script>
import DCard from '@/components/DCard'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsCard } from './options'

export default {
  name: 'DemoCard',
  components: {
    DCard,
    InteractiveDemo
  },
  setup () {
    const options = optionsCard
    const bar = [{ text: 'Order now' }]
    const barAction = [
      { icon: 'favorite' },
      { icon: 'share' }
    ]

    return {
      options,
      bar,
      barAction
    }
  }
}
</script>

<style lang="scss">
.demo-card {
  max-width: 320px;
  width: 100%;
}
</style>
