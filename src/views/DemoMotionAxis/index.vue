<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <d-motion-axis
      ref="axis"
      v-bind="binds"
      id="id-motion-axis"
      class="max-w-full"
      :selected="binds.selected || propSelected"
      :admin="true"
      @click="onClick"
    >
      <template
        v-for="(image, index) in images"
        :key="index"
        v-slot:[`slide${index}`]
      >
        <div
          :class="image.class"
          :style="{'background-image': `url(${image.value})`}"
        />
      </template>
    </d-motion-axis>
  </interactive-demo>
</template>

<script>
import DMotionAxis from '@/components/DMotionAxis'
import InteractiveDemo from '@/--components/InteractiveDemo/InteractiveDemo'
import { computed, ref } from 'vue'
import { optionsMotionAxis } from './options'

export default {
  name: 'DemoMotionAxis',
  components: {
    DMotionAxis,
    InteractiveDemo
  },
  setup () {
    const options = optionsMotionAxis
    const selected = ref(0)
    const propSelected = computed(() => `slide${selected.value}`)
    const images = [
      {
        class: 'max-w-full w-64 md:w-96 h-64',
        value: require('@/assets/images/image-01.jpeg')
      },
      {
        class: 'max-w-full w-64 md:w-96 h-64',
        value: require('@/assets/images/image-02.jpeg')
      },
      {
        class: 'max-w-full w-64 md:w-96 h-64',
        value: require('@/assets/images/image-03.jpeg')
      },
      {
        class: 'max-w-full w-64 h-96',
        value: require('@/assets/images/image-04.jpeg')
      },
      {
        class: 'max-w-full w-64 md:w-96 h-64',
        value: require('@/assets/images/image-05.jpeg')
      },
      {
        class: 'max-w-full w-64 md:w-96 h-64',
        value: require('@/assets/images/image-06.jpeg')
      },
      {
        class: 'max-w-full w-64 md:w-96 h-64',
        value: require('@/assets/images/image-07.jpeg')
      },
      {
        class: 'max-w-full w-64 h-96',
        value: require('@/assets/images/image-08.jpeg')
      }
    ]

    return {
      options,
      selected,
      propSelected,
      images
    }
  },
  methods: {
    onClick () {
      if (this.$refs.axis.propTransition === 'back') {
        if (this.selected - 1 < 0) {
          this.selected = this.images.length - 1
        } else {
          this.selected--
        }
      } else if (this.selected + 2 > this.images.length) {
        this.selected = 0
      } else {
        this.selected++
      }
    }
  }
}
</script>

<style lang="scss"></style>
