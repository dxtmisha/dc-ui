<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="demo-data-item">
      <d-data-item
        id="id-data-item"
        :admin="true"
        :item="items[0]"
        :parameters="parameters"
        v-bind="binds"
      >
        <template v-slot:text="{ item }">
          <div>{{ item.name }}</div>
          <div class="font:body2 opacity:surface-medium">{{ item.id }}</div>
        </template>
        <template v-slot:body="{ item }">
          <div class="font:headline6">{{ item.name }}</div>
          <div class="font:body1 opacity:surface-medium">{{ item.id }}</div>
        </template>
      </d-data-item>
      <d-data-item v-bind="binds" :item="items[1]" :parameters="parameters">
        <template v-slot:text="{ item }">
          <div>{{ item.name }}</div>
          <div class="font:body2 opacity:surface-medium">{{ item.id }}</div>
        </template>
        <template v-slot:body="{ item }">
          <div class="font:headline6">{{ item.name }}</div>
          <div class="font:body1 opacity:surface-medium">{{ item.id }}</div>
        </template>
      </d-data-item>
      <d-data-item v-bind="binds" :item="items[2]" :parameters="parameters">
        <template v-slot:text="{ item }">
          <div>{{ item.name }}</div>
          <div class="font:body2 opacity:surface-medium">{{ item.id }}</div>
        </template>
        <template v-slot:body="{ item }">
          <div class="font:headline6">{{ item.name }}</div>
          <div class="font:body1 opacity:surface-medium">{{ item.id }}</div>
        </template>
      </d-data-item>
    </div>
  </interactive-demo>
</template>

<script>
import DDataItem from '@/components/DDataItem'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsDataItem } from './options'
import { tableItems } from '@/media/demo/data/list'

export default {
  name: 'DemoDataItem',
  components: {
    DDataItem,
    InteractiveDemo
  },
  setup () {
    const options = optionsDataItem
    const items = tableItems(3)
    const parameters = ['city', 'policy']

    return {
      options,
      items,
      parameters
    }
  }
}
</script>

<style lang="scss">
.demo-data-item {
  border-width: var(--basic-border-width);
  width: 100%;
}
</style>
