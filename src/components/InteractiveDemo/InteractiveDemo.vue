<template>
  <div class="interactive-demo">
    <div :class="{ 'option-sticky': sticky }" class="interactive-demo__show">
      <slot :binds="valueData" :on="on" :update="updateProps"/>
    </div>
    <interactive-demo-option
      :options="valueOptions"
      @on-input="onInput"
    />
    <interactive-demo-code :options="valueData"/>
    <d-snackbar ref="snackbar"/>
  </div>
</template>

<script>
import DSnackbar from '../../../components/DSnackbar'
import InteractiveDemoCode from './InteractiveDemoCode'
import InteractiveDemoOption from './InteractiveDemoOption'
import { toRefs } from 'vue'
import { useOptions } from './useOptions'
import forEach from '../../../functions/forEach'

export default {
  name: 'InteractiveDemo',
  components: {
    DSnackbar,
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
      try {
        this.$refs.snackbar.show({ text: JSON.stringify(event || {}) })
      } catch (e) {
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/dimension";
@import "../../../styles/flex";
@import "../../../styles/font";
@import "../../../styles/media";
@import "../../../styles/position";

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
  display: grid;
  align-items: flex-start;
  border-radius: var(--basic-radius);
  background: var(--background-type1);
  box-shadow: var(--shadow-type1);
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "show"
    "options";

  &__show {
    @include flexCenter;
    @extend %id-padding;
    @extend %flex-basis;
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    min-height: 320px;
    grid-area: show;

    @include mediaMinWidth() {
      flex-basis: 1px;

      &.option-sticky {
        @include sticky;
        top: var(--basic-top);
      }
    }
  }

  &__option {
    @extend %id-padding;
    @extend %flex-basis;
    grid-area: options;

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
    flex-basis: 100%;
    text-align: center;
    --basic-text-opacity: var(--opacity-surface-medium);
  }

  @include mediaMinWidth() {
    grid-template-columns: auto 280px;
    grid-template-areas:
      "show options";

    &__option {
      border-left-width: var(--basic-border-width);
    }
  }
}
</style>
