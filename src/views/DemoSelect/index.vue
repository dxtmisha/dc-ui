<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-select
      v-bind="binds"
      id="id-select"
      name="interactive-demo"
      :list="list"
      :admin="true"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DSelect from '@/components/DSelect'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsSelect } from './options'
import menu from '@/media/demo/list/menu'

export default {
  name: 'DemoSelect',
  components: {
    DSelect,
    InteractiveDemo
  },
  setup () {
    const options = optionsSelect
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
