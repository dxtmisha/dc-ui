<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-top">
      <d-top
        v-bind="binds"
        id="id-top"
        :bar-action="barAction"
        text-action="Action"
        :admin="true"
      />
      <div class="pt-4" v-html="text"/>
    </div>
  </interactive-demo>
</template>

<script>
import DTop from '@/--components/DTop'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import action from '@/media/--demo/list/action'
import { optionsTop } from './options'
import { leoTolstoy } from '@/media/--demo/data/text'

export default {
  name: 'DemoTop',
  components: {
    DTop,
    InteractiveDemo
  },
  setup () {
    const options = optionsTop
    const barAction = action
    const text = leoTolstoy

    return {
      options,
      barAction,
      text
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
