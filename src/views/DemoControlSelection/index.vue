<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <d-control-selection
      v-bind="binds"
      id="id-control-selection"
      class="demo-control-selection"
      :admin="true"
      @on-selected="on"
    >
      <template v-slot:default="{ className, classNameClick, onClick }">
        <div
          v-for="item in list"
          :key="item"
          :class="`demo-control-selection__item border ${className} ${classNameClick}`"
          :data-value="item"
          @click="onClick"
        >
          <span>{{ item }}</span>
        </div>
      </template>
    </d-control-selection>
  </interactive-demo>
</template>

<script>
import DControlSelection from '../../../components/DControlSelection'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsControlSelection } from './options'

export default {
  name: 'DemoControlSelection',
  components: {
    DControlSelection,
    InteractiveDemo
  },
  setup () {
    const options = optionsControlSelection
    const list = (() => {
      const list = []

      for (let i = 1; i <= 102; i++) {
        list.push(i)
      }

      return list
    })()

    return {
      options,
      list
    }
  },
  methods: {
    on (event) {
      console.warn('event', event)
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/dimension";
@import "../../styles/flex";

.demo-control-selection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 8px;
  width: 100%;

  &__item {
    @include flexCenter;
    @include squared(100px);
    margin: 8px;
  }
}
</style>
