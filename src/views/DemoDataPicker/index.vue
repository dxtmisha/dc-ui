<template>
  <interactive-demo
      :options="options"
      v-slot:default="{ binds }"
  >
    <div class="demo-data-picker">
      <d-data-picker
          id="id-data-picker"
          :admin="true"
          :list="list"
          :parameters="parameters"
          v-bind="binds"
      >
        <template v-slot:text="{ item }">
          <div>{{ item.name }}</div>
          <div class="font:body2 opacity:surface-medium">{{ item.id }}</div>
        </template>
      </d-data-picker>
    </div>
  </interactive-demo>
</template>

<script>
import DDataPicker from '@/components/DDataPicker'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsDataPicker } from './options'
import { tableItems } from '@/media/demo/data/list'

export default {
  name: 'DemoDataPicker',
  components: {
    DDataPicker,
    InteractiveDemo
  },
  setup () {
    const options = optionsDataPicker
    const list = tableItems()
    const parameters = ['city', 'policy']

    return {
      options,
      list,
      parameters
    }
  }
}
</script>

<style lang="scss">
.demo-data-picker {
  border-width: var(--basic-border-width);
  width: 100%;
}
</style>
