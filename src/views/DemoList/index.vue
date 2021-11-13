<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-list">
      <d-list
        v-bind="binds"
        :list="list"
        :selected="selected"
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
import { optionsList } from '@/views/DemoList/options'
import { menu } from '@/media/demo/list'

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
    onClick ({
      toSelected,
      value
    }) {
      this.selected = toSelected ? value : undefined
    }
  }
}
</script>

<style lang="scss">
.demo-list {
  border-width: var(--basic-border-width);
  max-width: 100%;
  width: 320px;
}
</style>
