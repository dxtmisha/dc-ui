<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-tab-picker :list="list" selected="favorites" v-bind="binds">
      <template v-slot:favorites>favorites</template>
      <template v-slot:music>music</template>
      <template v-slot:places>places</template>
      <template v-slot:news>news</template>
    </d-tab-picker>
  </interactive-demo>
</template>

<script>
import DTabPicker from '../../../components/DTabPicker'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsTabPicker } from './options'
import { bottomNavigation } from '@/media/demo/data/list'

export default {
  name: 'DemoTabPicker',
  components: {
    DTabPicker,
    InteractiveDemo
  },
  setup () {
    const options = optionsTabPicker
    const list = bottomNavigation

    return {
      options,
      list
    }
  }
}
</script>

<style lang="scss"/>
