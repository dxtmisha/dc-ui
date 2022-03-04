<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-button-sort
      v-bind="binds"
      id="id-button-sort"
      :admin="true"
      :list="list"
      name="interactive-demo"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DButtonSort from '../../../components/DButtonSort'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsButtonSort } from './options'
import { sort } from '@/media/demo/data/list'

export default {
  name: 'DemoButtonSort',
  components: {
    DButtonSort,
    InteractiveDemo
  },
  setup () {
    const options = optionsButtonSort
    const list = sort

    return {
      options,
      list
    }
  }
}
</script>

<style lang="scss"/>
