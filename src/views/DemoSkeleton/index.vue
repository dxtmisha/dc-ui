<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <div>
      <d-button text="Interactive demo" @click="on"/>
      <d-skeleton
        v-bind="binds"
        class="demo-skeleton pt-4"
        id="id-skeleton"
        item-text=".d-card-title__text"
        item-secondary=".d-card-title__description, .d-card-text > div"
        item-tertiary=".d-card-media, .d-actions > button"
        item-border=".d-card"
        :progress="progress"
        :admin="true"
      >
        <d-card
          v-for="(card, index) in cards"
          class="demo-skeleton__card"
          :key="index"
          v-bind="card"
        />
      </d-skeleton>
    </div>
  </interactive-demo>
</template>

<script>
import DCard from '@/components/DCard'
import DSkeleton from '@/components/DSkeleton'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsSkeleton } from './options'
import { ref } from 'vue'
import { tableCards } from '@/media/demo/data/list'
import DButton from '@/components/DButton'

export default {
  name: 'DemoSkeleton',
  components: {
    DButton,
    DCard,
    DSkeleton,
    InteractiveDemo
  },
  setup () {
    const options = optionsSkeleton
    const cards = ref(tableCards(6))
    const progress = ref(false)

    const on = () => {
      if (!progress.value) {
        progress.value = true

        setTimeout(() => {
          cards.value = tableCards(6)
          progress.value = false
        }, 4000)
      }
    }

    return {
      options,
      cards,
      progress,
      on
    }
  }
}
</script>

<style lang="scss">
.demo-skeleton {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  width: 100%;

  .d-card-text .skeleton-secondary {
    display: inline;
  }
}
</style>
