<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds, on }"
  >
    <div>
      <div class="demo-table border">
        <d-table
          v-bind="binds"
          id="id-table"
          :admin="true"
          @on-input="on"
          @on-sort="on"
        >
          <template v-slot:status="{ item }">
            <template v-if="binds.size === 'small'">{{ item.status }}</template>
            <d-button
              v-else
              :text="item.status"
              :color="item.color"
              :readonly="true"
              appearance="chip-color"
            />
          </template>
          <template v-slot:name="{ item }">
            <a :href="`#id-${item.id}`">{{ item.name }}</a>
            <span v-if="binds.size !== 'small'" class="demo-table__id">{{ item.id }}</span>
          </template>
          <template v-slot:policy="{ item }">
            <b>{{ item.policy }}</b>
          </template>
        </d-table>
      </div>
      <div class="pt-8" v-html="text"/>
    </div>
  </interactive-demo>
</template>

<script>
import DButton from '@/components/DButton'
import DTable from '@/components/DTable'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsTable } from './options'
import { leoTolstoy } from '@/media/demo/data/text'

export default {
  name: 'DemoTable',
  components: {
    DButton,
    DTable,
    InteractiveDemo
  },
  setup () {
    const options = optionsTable
    const text = leoTolstoy

    return {
      options,
      text
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/font";

.demo-table {
  width: 100%;

  &__id {
    @include font('body2');
    --basic-text-opacity: var(--opacity-surface-medium);
    display: block;
  }
}
</style>
