<template>
  <interactive-demo
    :options="options"
    :sticky="false"
    v-slot:default="{ binds }"
  >
    <d-motion-scroll
      v-bind="binds"
      :class="{ 'demo-motion-scroll': !binds.element }"
      id="id-motion-scroll"
      page="3"
      :admin="true"
      @on-scroll="onScroll"
    >
      <template v-slot:default="{ className }">
        <div
          v-for="page in pages"
          :key="page"
          :class="className"
          :data-page="page"
        >
          <div class="font:headline5 pt-8 pb-4">Page@{{ page }}</div>
          <div v-html="[2, 5, 7, 8].indexOf(page) !== -1 ? text[1] : text[0]"/>
        </div>
      </template>
    </d-motion-scroll>
  </interactive-demo>
</template>

<script>
import DMotionScroll from '@/--components/DMotionScroll'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { computed, ref } from 'vue'
import { optionsMotionScroll } from '@/views/DemoMotionScroll/options'
import { alexanderPushkin, leoTolstoy } from '@/media/demo/data/text'

export default {
  name: 'DemoMotionScroll',
  components: {
    DMotionScroll,
    InteractiveDemo
  },
  setup () {
    const options = optionsMotionScroll
    const page = ref(3)
    const text = [alexanderPushkin, leoTolstoy]

    const pages = computed(() => {
      let min = page.value - 3
      const data = []

      if (min < 1) {
        min = 1
      }

      for (let i = 0; i < 7; i++) {
        data.push(min + i)
      }

      return data
    })

    return {
      options,
      pages,
      page,
      text
    }
  },
  methods: {
    onScroll (event) {
      this.page = event.value
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/dimension";
@import "../../styles/media";

.demo-motion-scroll {
  height: dimension(112);
  overflow: auto;

  @include mediaMinWidth() {
    height: dimension(160);
  }
}
</style>
