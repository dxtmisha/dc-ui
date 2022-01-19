<template>
  <interactive-demo
    :options="options"
    v-slot:default="{ binds }"
  >
    <div class="w-full">
      <d-motion-cell
        id="id-motion-cell"
        ref="cell"
        :admin="true"
        class="flex gap-4 items-start pb-8"
        v-bind="binds"
      >
        <div
          v-for="({text, index}, key) in list"
          :key="index"
          class="basis-64 grow shrink"
          @click="onRemove(key)"
        >
          <div class="demo-cell__item p-4 rounded">{{ text }}</div>
        </div>
      </d-motion-cell>
      <d-button @click="onAdd">Add</d-button>
    </div>
  </interactive-demo>
</template>

<script>
import DButton from '../../../components/DButton'
import DMotionCell from '../../../components/DMotionCell'
import InteractiveDemo from '@/components/InteractiveDemo/InteractiveDemo'
import { ref } from 'vue'
import getRandom from '../../../functions/getRandom'
import { optionsMotionCell } from './options'

export default {
  name: 'DemoMotionCell',
  components: {
    DButton,
    DMotionCell,
    InteractiveDemo
  },
  setup () {
    const cell = ref(undefined)

    let id = 1
    const options = optionsMotionCell
    const list = ref([])
    const texts = [
      'She looked at the masterpiece hanging in the museum but all she could think is that her five-year-old could do better.',
      'The reservoir water level continued to lower while we enjoyed our long shower.',
      'The miniature pet elephant became the envy of the neighborhood.',
      'I\'ll have you know I\'ve written over fifty novels.',
      'Green should have smelled more tranquil, but somehow it just tasted rotten.',
      'I\'d rather be a bird than a fish.',
      'The light that burns twice as bright burns half as long.',
      'The gruff old man sat in the back of the bait shop grumbling to himself as he scooped out a handful of worms.',
      'The sudden rainstorm washed crocodiles into the ocean.',
      'Dan took the deep dive down the rabbit hole.'
    ]

    const getText = () => {
      return {
        text: texts[getRandom(0, texts.length - 1)],
        index: id++
      }
    }

    const onAdd = () => cell.value.update(() => list.value.push(getText()))
    const onRemove = item => cell.value.update(() => list.value.splice(item, 1))

    list.value.push(getText())
    list.value.push(getText())
    list.value.push(getText())
    list.value.push(getText())

    return {
      cell,
      options,
      list,
      onAdd,
      onRemove
    }
  }
}
</script>

<style lang="scss">
@import "../../../styles/color";

.demo-cell {
  &__item {
    background-color: varColor(--background-overlay, --opacity-overlay);
  }
}
</style>
