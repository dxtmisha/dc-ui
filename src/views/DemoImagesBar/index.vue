<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <div class="demo-images-bar">
      <d-images-bar
        v-bind="binds"
        id="id-images-bar"
        :admin="true"
        @on-click="on"
      />
    </div>
  </interactive-demo>
</template>

<script>
import DImagesBar from '@/components/DImagesBar'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsImagesBar } from './options'

export default {
  name: 'DemoImagesBar',
  components: {
    DImagesBar,
    InteractiveDemo
  },
  setup () {
    const options = optionsImagesBar
    return { options }
  }
}
</script>

<style lang="scss">
@import "../../styles/dimension";

.demo-drop {
  @include squared(100%);
  max-width: 400px;
  position: relative;
}
</style>
