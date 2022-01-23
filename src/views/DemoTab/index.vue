<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-tab">
      <d-tab
        v-bind="binds"
        id="id-tab"
        :admin="true"
        :list="list"
        :selected="selected"
        @on-click="on"
      />
      <d-motion-axis
        :selected="selected"
        :transition="transition"
        class="border"
      >
        <template v-slot:favorites>
          <div class="p-4">favorites</div>
        </template>
        <template v-slot:music>
          <div class="p-4">music</div>
        </template>
        <template v-slot:places>
          <div class="p-4">places</div>
        </template>
        <template v-slot:news>
          <div class="p-4">news</div>
        </template>
      </d-motion-axis>
    </div>
  </interactive-demo>
</template>

<script>
import DMotionAxis from '../../../components/DMotionAxis'
import DTab from '../../../components/DTab'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import { optionsTab } from './options'
import { bottomNavigation } from '@/media/demo/data/list'

export default {
  name: 'DemoTab',
  components: {
    DMotionAxis,
    DTab,
    InteractiveDemo
  },
  setup () {
    const options = optionsTab
    const list = bottomNavigation
    const selected = ref('favorites')
    const transition = ref('next')

    return {
      options,
      list,
      transition,
      selected
    }
  },
  methods: {
    on (event) {
      this.transition = event.direction
      this.selected = event.value
    }
  }
}
</script>

<style lang="scss">
.demo-tab {
  width: 100%;
}
</style>
