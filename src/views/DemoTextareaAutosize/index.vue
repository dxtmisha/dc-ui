<template>
  <interactive-demo v-slot:default="{ binds }">
    <d-textarea-autosize class="demo-textarea-autosize" v-bind="binds" :value="text"/>
  </interactive-demo>
</template>

<script>
import DTextareaAutosize from '@/--components/DTextareaAutosize'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { textarea } from '@/media/demo/data/text'

export default {
  name: 'DemoTextareaAutosize',
  components: {
    DTextareaAutosize,
    InteractiveDemo
  },
  setup () {
    const text = textarea
    return { text }
  }
}
</script>

<style lang="scss">
.demo-textarea-autosize {
  border-width: var(--basic-border-width);
  max-width: 320px;
  width: 100%;
}
</style>
