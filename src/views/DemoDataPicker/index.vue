<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds, on }"
  >
    <div class="demo-data-picker">
      <d-data-picker
        id="id-data-picker"
        :admin="true"
        :list="list"
        :parameters="parameters"
        v-bind="binds"
        @on-click="on"
      >
        <template v-slot:text="{ item, on }">
          <div><a @click="on">{{ item.name }}</a></div>
          <div class="font:body2 opacity:surface-medium"><span>{{ item.id }}</span></div>
        </template>
        <template v-slot:body="{ item, on }">
          <div class="p-4">
            <div class="border p-4">
              <div class="font:headline6"><a @click="on">{{ item.name }}</a></div>
              <div class="font:body1 opacity:surface-medium">{{ item.id }}</div>
              <div class="pt-8" v-html="text"/>
            </div>
          </div>
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
import { denisDavydov } from '@/media/demo/data/text'

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
    const text = denisDavydov

    return {
      options,
      list,
      parameters,
      text
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
