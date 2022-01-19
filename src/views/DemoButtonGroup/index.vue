<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-button-group
      v-bind="binds"
      id="id-button-group"
      :list="list"
      :admin="true"
      @on-input="on"
    />
  </interactive-demo>
</template>

<script>
import DButtonGroup from '../../../components/DButtonGroup'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsActions } from './options'
import { page } from '@/media/demo/data/list'

export default {
  name: 'DemoButtonGroup',
  components: {
    DButtonGroup,
    InteractiveDemo
  },
  setup () {
    const options = optionsActions
    const list = page

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

<style lang="scss">
.demo-actions {
  max-width: 640px;
  width: 100%;
}
</style>
