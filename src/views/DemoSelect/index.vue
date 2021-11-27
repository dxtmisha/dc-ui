<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-select v-bind="binds" :list="list"/>
  </interactive-demo>
</template>

<script>
import DSelect from '@/components/DSelect'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsSelect } from '@/views/DemoSelect/options'
import { menu } from '@/media/demo/list'

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
  }
}
</script>

<style lang="scss"></style>
