<template>
  <interactive-demo
    ref="interactive"
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <d-motion-transform
      v-bind="binds"
      id="id-motion-transform"
      class="demo-motion-transform"
      :admin="true"
      @on-open="on"
    >
      <template v-slot:head>
        <div class="p-4 border" v-html="text[0]"/>
      </template>
      <template v-slot:default>
        <div class="p-4"/>
        <div class="p-2 border text-center panel-close cursor-default">Close</div>
        <div class="p-4" v-html="text[1]"/>
      </template>
    </d-motion-transform>
  </interactive-demo>
</template>

<script>
import DMotionTransform from '@/components/DMotionTransform'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsMotionTransform } from './options'
import { quote2, leoTolstoy } from '@/media/demo/data/text'

export default {
  name: 'DemoMotionTransform',
  components: {
    DMotionTransform,
    InteractiveDemo
  },
  setup () {
    const options = optionsMotionTransform
    const text = [quote2, leoTolstoy]

    return {
      options,
      text
    }
  },
  methods: {
    on ({ open }) {
      this.$refs.interactive.setData('open', open)
    }
  }
}
</script>

<style lang="scss">
.demo-motion-transform {
  content: '';
  width: 100%;
}
</style>
