<template>
  <interactive-demo :options="options" v-slot:default="{ binds, on }">
    <div class="demo-icon-item">
      <div class="demo-icon-item__item">
        <d-icon-item
          id="id-icon-item"
          v-bind="binds"
          :icon="file || binds.icon"
          :admin="true"
          @on-load="on"
        />
      </div>
      <div class="demo-icon-item__input pt-4">
        <input type="file" @input="onInput">
      </div>
    </div>
  </interactive-demo>
</template>

<script>
import DIconItem from '../../../components/DIconItem'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import { optionsIconItem } from './options'

export default {
  name: 'DemoIconItem',
  components: {
    DIconItem,
    InteractiveDemo
  },
  setup () {
    const options = optionsIconItem
    const file = ref(undefined)

    return {
      options,
      file
    }
  },
  methods: {
    onInput ({ target }) {
      this.file = target.files?.[0]
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/dimension";
@import "../../../styles/flex";
@import "../../../styles/font";

.demo-icon-item {
  @include flexY;
  gap: dimension(4);

  &__item {
    @include font('headline2');
    @include squared(256px);
    border-width: var(--basic-border-width);
    position: relative;
  }
}
</style>
