<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <d-skeleton
      v-bind="binds"
      class="demo-skeleton"
      id="id-skeleton"
      item-text=".d-card-title__text"
      :admin="true"
    >
      <d-card
        v-for="(card, index) in cards"
        class="demo-skeleton__card"
        :key="index"
        v-bind="card"
      />
    </d-skeleton>
  </interactive-demo>
</template>

<script>
import DCard from '@/components/DCard'
import DSkeleton from '@/components/DSkeleton'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsSkeleton } from './options'
import { ref } from 'vue'
import { tableCards } from '@/media/demo/data/list'

export default {
  name: 'DemoSkeleton',
  components: {
    DCard,
    DSkeleton,
    InteractiveDemo
  },
  setup () {
    const options = optionsSkeleton
    const cards = ref(tableCards(6))

    return {
      options,
      cards
    }
  }
}
</script>

<style lang="scss">
.demo-skeleton {
  align-items: start;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  width: 100%;
}
</style>
