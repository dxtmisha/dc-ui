<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <d-motion-sticky
      v-bind="binds"
      id="id-motion-scroll"
      class="demo-motion-sticky"
      :class="{ 'option-minimum': !binds.element }"
      :admin="true"
    >
      <template v-slot:default="{ className }">
        <h5 class="font:headline5 pb-6">Leo Tolstoy</h5>
        <div v-html="text[0]"/>
        <div class="demo-motion-sticky__top" :class="className">Interactive demo</div>
        <h5 class="font:headline5 pb-6 pt-4">Alexander Pushkin</h5>
        <div v-html="text[1]"/>
        <div class="demo-motion-sticky__bottom" :class="className">Interactive demo</div>
        <h5 class="font:headline5 pb-6 pt-4">Denis Davydov</h5>
        <div v-html="text[2]"/>
      </template>
    </d-motion-sticky>
  </interactive-demo>
</template>

<script>
import DMotionSticky from '../../../components/DMotionSticky'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { optionsMotionSticky } from './options'
import { alexanderPushkin, denisDavydov, leoTolstoy } from '@/media/demo/data/text'

export default {
  name: 'DemoMotionSticky',
  components: {
    DMotionSticky,
    InteractiveDemo
  },
  setup () {
    const options = optionsMotionSticky
    const text = [leoTolstoy, alexanderPushkin, denisDavydov]

    return {
      options,
      text
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/color";
@import "../../../styles/dimension";
@import "../../../styles/elevation";
@import "../../../styles/font";

.demo-motion-sticky {
  position: relative;

  &.option-minimum {
    height: dimension(112);
    overflow: auto;
  }

  &__top,
  &__bottom {
    @include index(9);
    @include font('headline6');
    padding: 16px 0;
    position: sticky;
    text-align: center;

    &.status-sticky {
      @include shadow(1);
      --basic-text: var(--text-type2);
      --_dm--mt-background: var(--primary-type1);
      background-color: varColor(--_dm--mt-background);
      border-radius: var(--basic-radius);
    }
  }

  &__top {
    top: 72px;

    &.status-sticky {
      background-color: varColor(--primary-type1);
    }
  }

  &__bottom {
    bottom: 8px;

    &.status-sticky {
      --_dm--mt-background: var(--secondary-type1);
    }
  }
}
</style>
