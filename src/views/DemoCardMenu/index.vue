<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-card-menu
      v-bind="binds"
      id="id-card-menu"
      :admin="true"
      :list="list"
      @on-click="on"
    />
  </interactive-demo>
</template>

<script>
import DCardMenu from '../../../components/DCardMenu'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsCardMenu } from './options'
import { menuMin } from '@/media/demo/data/list'

export default {
  name: 'DemoCardMenu',
  components: {
    DCardMenu,
    InteractiveDemo
  },
  setup () {
    const options = optionsCardMenu
    const list = menuMin

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
