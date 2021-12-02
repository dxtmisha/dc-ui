<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-button-select
      v-bind="binds"
      id="id-button-select"
      name="interactive-demo"
      :list="list"
      :admin="true"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DButtonSelect from '@/components/DButtonSelect'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsButtonSelect } from './options'
import menu from '@/media/demo/list/menu'

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
  },
  methods: {
    on (event) {
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss"></style>
