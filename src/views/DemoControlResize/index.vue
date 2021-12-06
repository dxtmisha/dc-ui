<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-control-resize" :style="styleList">
      <d-control-resize v-bind="binds" @on-resize="on"/>
    </div>
  </interactive-demo>
</template>

<script>
import DControlResize from '@/components/DControlResize'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsControlResize } from './options'

export default {
  name: 'DemoControlResize',
  components: {
    DControlResize,
    InteractiveDemo
  },
  setup () {
    const options = optionsControlResize
    const styleList = { 'background-image': `url(${require('@/assets/images/image-01.jpeg')})` }

    return {
      options,
      styleList
    }
  },
  methods: {
    on (event) {
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/dimension";

.demo-control-resize {
  @include aspectRatio('16/9');
  width: 100%;
  position: relative;
}
</style>
