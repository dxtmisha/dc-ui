<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <div class="demo-data">
      <d-data
        id="id-data"
        v-bind="binds"
        :admin="true"
        :items="items"
        :parameters="parameters"
      >
        <template v-slot:text="{ item, text }">
          <div v-html="text"/>
          <div class="font:body2 opacity:surface-medium">{{ item.id }}</div>
        </template>
        <template v-slot:body="{ item }">
          <div class="p-4">
            <div class="border p-4">
              <div class="font:headline6">{{ item.name }}</div>
              <div class="font:body1 opacity:surface-medium">{{ item.id }}</div>
              <div class="pt-8">
                Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui.
              </div>
            </div>
          </div>
        </template>
      </d-data>
    </div>
  </interactive-demo>
</template>

<script>
import DData from '../../../components/DData'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsData } from './options'
import { tableItems } from '@/media/demo/data/list'

export default {
  name: 'DemoData',
  components: {
    DData,
    InteractiveDemo
  },
  setup () {
    const options = optionsData
    const items = tableItems(16)
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
.demo-data {
  border-width: var(--basic-border-width);
  width: 100%;
}
</style>
