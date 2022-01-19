<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds, on }"
  >
    <div class="demo-table">
      <d-table-picker
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
      </d-table-picker>
    </div>
  </interactive-demo>
</template>

<script>
import DButton from '../../../components/DButton'
import DTablePicker from '../../../components/DTablePicker'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsTablePicker } from './options'

export default {
  name: 'DemoTablePicker',
  components: {
    DButton,
    DTablePicker,
    InteractiveDemo
  },
  setup () {
    const options = optionsTablePicker

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
