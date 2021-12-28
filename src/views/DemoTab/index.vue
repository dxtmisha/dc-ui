<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div>
      <d-tab
        v-bind="binds"
        id="id-tab"
        :admin="true"
        :list="list"
        :selected="selected"
        @on-click="on"
      />
      <div v-html="text"></div>
    </div>
  </interactive-demo>
</template>

<script>
import DTab from '@/components/DTab'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import { optionsTab } from './options'
import { bottomNavigation } from '@/media/demo/data/list'
import { alexanderPushkin } from '@/media/demo/data/text'

export default {
  name: 'DemoTab',
  components: {
    DTab,
    InteractiveDemo
  },
  setup () {
    const options = optionsTab
    const list = bottomNavigation
    const text = alexanderPushkin
    const selected = ref(undefined)

    return {
      options,
      list,
      text,
      selected
    }
  },
  methods: {
    on (event) {
      this.selected = event.value
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss"></style>
