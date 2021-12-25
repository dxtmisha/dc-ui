<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-scrollbar
      v-bind="binds"
      id="id-scrollbar"
      class="demo-scrollbar"
      :admin="true"
      v-html="text"
    />
  </interactive-demo>
</template>

<script>
import DScrollbar from '@/--components/DScrollbar'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsScrollbar } from './options'
import { alexanderPushkin } from '@/media/demo/data/text'

export default {
  name: 'DemoScrollbar',
  components: {
    DScrollbar,
    InteractiveDemo
  },
  setup () {
    const options = optionsScrollbar
    const text = alexanderPushkin

    return {
      options,
      text
    }
  }
}
</script>

<style lang="scss">
.demo-scrollbar {
  max-height: 480px;
}
</style>
