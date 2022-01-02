<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds, on }"
  >
    <div class="demo-table border">
      <d-table
        v-bind="binds"
        id="id-table"
        :admin="true"
        @on-input="on"
        @on-sort="on"
      >
        <template v-slot:status="{ item }">
          <d-button
            :text="item.status"
            :color="item.color"
            appearance="chip-color"
          />
        </template>
        <template v-slot:name="{ item }">
          <a :href="`#id-${item.id}`">{{ item.name }}</a>
          <span class="demo-table__id">{{ item.id }}</span>
        </template>
        <template v-slot:policy="{ item }">
          <b>{{ item.policy }}</b>
        </template>
      </d-table>
    </div>
  </interactive-demo>
</template>

<script>
import DTable from '@/components/DTable'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsTable } from './options'
import DButton from '@/components/DButton'

export default {
  name: 'DemoTable',
  components: {
    DButton,
    DTable,
    InteractiveDemo
  },
  setup () {
    const options = optionsTable
    return { options }
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
