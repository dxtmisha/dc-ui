<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <div class="demo-banner">
      <d-banner
        v-bind="binds"
        id="id-banner"
        :admin="true"
      />
      <div class="pt-4" v-html="text"/>
    </div>
  </interactive-demo>
</template>

<script>
import DBanner from '@/components/DBanner'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsBanner } from './options'
import { alexanderPushkin } from '@/media/demo/data/text'

export default {
  name: 'DemoBanner',
  components: {
    DBanner,
    InteractiveDemo
  },
  setup () {
    const options = optionsBanner
    const text = alexanderPushkin

    return {
      options,
      text
    }
  }
}
</script>

<style lang="scss">
.demo-banner {
  width: 100%;
}
</style>
