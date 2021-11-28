<template>
  <interactive-demo :options="options" v-slot:default="{ binds }">
    <div class="demo-icon-item">
      <div class="demo-icon-item__item">
        <d-icon-item v-bind="binds" :icon="file || binds.icon"/>
      </div>
      <div class="demo-icon-item__input">
        <input type="file" @input="onInput">
      </div>
    </div>
  </interactive-demo>
</template>

<script>
import DIconItem from '@/--components/DIconItem'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import { optionsIconItem } from '@/views/DemoIconItem/options'

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
@import "../../styles/dimension";
@import "../../styles/flex";
@import "../../styles/font";

.demo-icon-item {
  @include flexY;
  gap: dimension(4);

  &__item {
    @include font('headline4');
    @include squared(64px);
    border-width: var(--basic-border-width);
    position: relative;
  }
}
</style>
