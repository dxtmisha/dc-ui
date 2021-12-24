<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <div class="demo-top">
      <d-top
        v-bind="binds"
        id="id-top"
        :admin="true"
        @on-click="on"
      />
      <div class="pt-4" v-html="text"/>
    </div>
  </interactive-demo>
</template>

<script>
import DTop from '@/--components/DTop'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { optionsTop } from './options'
import { leoTolstoy } from '@/media/demo/data/text'

export default {
  name: 'DemoTop',
  components: {
    DTop,
    InteractiveDemo
  },
  setup () {
    const options = optionsTop
    const text = leoTolstoy

    return {
      options,
      text
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
.demo-top {
  max-width: 640px;
  width: 100%;
}
</style>
