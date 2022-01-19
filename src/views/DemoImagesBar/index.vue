<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <div class="demo-images-bar">
      <div class="demo-images-bar__square"/>
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
import DImagesBar from '../../../components/DImagesBar'
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
@import "../../../styles/dimension";

.demo-images-bar {
  @include squared(100%);
  max-width: 320px;
  position: relative;

  &__square {
    @include squared(100%);
    background-image: url("../../assets/images/image-02.jpeg");
    position: relative;
  }
}
</style>
