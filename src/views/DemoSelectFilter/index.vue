<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-select-filter
      id="id-select-filter"
      :admin="true"
      :list="list"
      key-text="name"
      name="interactive-demo"
      v-bind="binds"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DSelectFilter from '../../../components/DSelectFilter'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsSelectFilter } from './options'
import { tableItems } from '@/media/demo/data/list'

export default {
  name: 'DemoSelectFilter',
  components: {
    DSelectFilter,
    InteractiveDemo
  },
  setup () {
    const options = optionsSelectFilter
    const list = tableItems(9)

    return {
      options,
      list
    }
  }
}
</script>

<style lang="scss"></style>
