<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-list">
      <d-list v-bind="binds" :list="list"/>
    </div>
  </interactive-demo>
</template>

<script>
import DList from '@/components/DList'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsList } from '@/views/DemoList/options'
import List from '@/classes/List'
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

    return {
      options,
      list
    }
  }
}
</script>

<style lang="scss">
.demo-list {
  max-width: 100%;
  width: 320px;
}
</style>
