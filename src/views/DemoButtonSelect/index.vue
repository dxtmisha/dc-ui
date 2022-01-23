<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <d-button-select
      v-bind="binds"
      id="id-button-select"
      :admin="true"
      :list="list"
      name="interactive-demo"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DButtonSelect from '../../../components/DButtonSelect'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsButtonSelect } from './options'
import { menu } from '@/media/demo/data/list'

export default {
  name: 'DemoButtonSelect',
  components: {
    DButtonSelect,
    InteractiveDemo
  },
  setup () {
    const options = optionsButtonSelect
    const list = menu

    return {
      options,
      list
    }
  }
}
</script>

<style lang="scss"></style>
