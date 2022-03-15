<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-tab-picker v-bind="binds">
    </d-tab-picker>
  </interactive-demo>
</template>

<script>
import DTabPicker from '../../../components/DTabPicker'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
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
    const selected = ref('favorites')

    return {
      options,
      list,
      selected
    }
  },
  methods: {
    on (event) {
    }
  }
}
</script>

<style lang="scss"/>
