<template>
  <div class="interactive-demo">
    <div class="interactive-demo__show" :class="{ 'option-sticky': sticky }">
      <slot :binds="valueData" :on="on" :update="updateProps"/>
    </div>
    <interactive-demo-option
      :options="valueOptions"
      @on-input="onInput"
    />
    <interactive-demo-code :options="valueData"/>
  </div>
</template>

<script>
import InteractiveDemoCode from './InteractiveDemoCode'
import InteractiveDemoOption from './InteractiveDemoOption'
import { toRefs } from 'vue'
import { useOptions } from './useOptions'
import forEach from './../../functions/forEach'

export default {
  name: 'InteractiveDemo',
  components: {
    InteractiveDemoCode,
    InteractiveDemoOption
  },
  props: {
    options: [Array, Object],
    sticky: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const { options } = toRefs(props)

    const {
      valueOptions,
      valueData,
      setData,
      setValue
    } = useOptions(options)

    const updateProps = item => forEach(item.$props, (prop, index) => setData(index, prop))

    return {
      valueOptions,
      valueData,
      setData,
      setValue,
      updateProps
    }
  },
  methods: {
    onInput ({
      item,
      value
    }) {
      this.setValue(item, value)
    },
    on (event) {
      console.warn('event', event)
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

%flex-basis {
  flex-basis: 100%;
}

%width {
  width: 100%;
}

.interactive-demo {
  align-items: flex-start;
  background: var(--background-type1);
  border-radius: var(--basic-radius);
  box-shadow: var(--shadow-type1);
  display: flex;
  flex-wrap: wrap;

  &__show {
    @include flexCenter;
    @extend %id-padding;
    @extend %flex-basis;
    flex-grow: 1;
    flex-shrink: 1;
    min-height: 320px;
    position: relative;

    @include mediaMinWidth() {
      flex-basis: 1px;

      &.option-sticky {
        position: sticky;
        top: var(--basic-top);
      }
    }
  }

  &__option {
    @extend %id-padding;
    @extend %flex-basis;
    border-left-width: var(--basic-border-width);

    @include mediaMinWidth() {
      flex-basis: 280px;
    }

    &__item {
      @include flexCenterY;
      align-items: stretch;
      min-height: 40px;
    }

    &__subtitle {
      @include font('subtitle2');
      padding: dimension(6) 0 dimension(2);
    }
  }

  &__code {
    @include font('body2');
    @extend %id-padding;
    --basic-text-opacity: var(--opacity-surface-medium);
    flex-basis: 100%;
    text-align: center;
  }
}
</style>
