<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    :sticky="false"
    v-slot:default="{ binds, on }"
  >
    <d-images
      v-bind="binds"
      class="demo-images"
      id="id-images"
      :admin="true"
      @on-click="on"
    />
  </interactive-demo>
</template>

<script>
import DImages from '../../../components/DImages'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsImages } from './options'

export default {
  name: 'DemoImages',
  components: {
    DImages,
    InteractiveDemo
  },
  setup () {
    const options = optionsImages
    return { options }
  }
}
</script>

<style lang="scss">
.demo-images {
  width: 100%;
}
</style>
