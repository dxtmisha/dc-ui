<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-scrollbar v-bind="binds" v-html="text"/>
  </interactive-demo>
</template>

<script>
import DScrollbar from '@/components/DScrollbar'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { alexanderPushkin } from '@/media/demo/texts'

export default {
  name: 'DemoScrollbar',
  components: {
    DScrollbar,
    InteractiveDemo
  },
  setup () {
    const options = [
      'status',
      'visible',

      'options',
      'border'
    ]
    const text = alexanderPushkin

    return {
      options,
      text
    }
  }
}
</script>

<style lang="scss"></style>
