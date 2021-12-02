<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-list">
      <d-list
        v-bind="binds"
        id="id-list"
        :list="list"
        :selected="selected"
        :admin="true"
        @on-click="onClick"
      />
    </div>
  </interactive-demo>
</template>

<script>
import DList from '@/components/DList'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import List from '@/classes/List'
import { ref } from 'vue'
import { optionsList } from './options'
import menu from '@/media/demo/list/menu'

export default {
  name: 'DemoList',
  components: {
    DList,
    InteractiveDemo
  },
  setup () {
    const options = optionsList
    const list = new List(menu, true, { translation: ['subtitle', 'text'] }).get()
    const selected = ref(undefined)

    return {
      options,
      list,
      selected
    }
  },
  methods: {
    onClick ({ value }) {
      this.selected = value
    }
  }
}
</script>

<style lang="scss">
.demo-list {
  border-width: var(--basic-border-width);
  max-width: 100%;
}
</style>
