<template>
  <div class="interactive-demo">
    <div class="interactive-demo__show">
      <slot :binds="valueData"/>
    </div>
    <interactive-demo-option
      :options="valueOptions"
      @on-input="onInput"
    />
    <div class="interactive-demo__code">code</div>
  </div>
</template>

<script>
import InteractiveDemoOption from '@/--components/InteractiveDemo/InteractiveDemoOption'
import { toRefs } from 'vue'
import { useOptions } from './useOptions'

export default {
  name: 'InteractiveDemo',
  components: { InteractiveDemoOption },
  props: {
    options: Array
  },
  setup (props) {
    const { options } = toRefs(props)

    const {
      valueOptions,
      valueData,
      setData,
      setValue
    } = useOptions(options)

    return {
      valueOptions,
      valueData,
      setData,
      setValue
    }
  },
  methods: {
    onInput ({
      item,
      value
    }) {
      this.setValue(item, value)
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/dimension";
@import "../../styles/flex";
@import "../../styles/font";
@import "../../styles/media";

%id-padding {
  padding: dimension(2) dimension(4);
}

.interactive-demo {
  background: var(--background-type1);
  border-radius: var(--basic-radius);
  box-shadow: var(--shadow-type1);
  display: flex;
  flex-wrap: wrap;

  &__show {
    @include flexCenter;
    @extend %id-padding;
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    min-height: 400px;
    position: relative;

    @include mediaMinWidth() {
      flex-basis: 1px;
    }
  }

  &__option {
    @extend %id-padding;
    flex-basis: 100%;

    @include mediaMinWidth() {
      flex-basis: 280px;
    }
  }

  &__code {
    @include font('body2');
    @extend %id-padding;
    flex-basis: 100%;
    text-align: center;
  }
}
</style>
