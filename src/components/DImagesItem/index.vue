<template>
  <div v-bind="binds" class="d-images-item a-static">
    <a :style="styleBody" class="d-images-item__body">
      <slot/>
      <d-icon :icon="iconCheck" class="d-images-item__icon"/>
    </a>
    <d-images-bar
      v-if="text || title"
      :item="item"
      :value="value"
      :title="title"
      :text="text"
      :selected="selected"
    />
  </div>
</template>

<script>
import DIcon from '@/components/DIcon'
import DImagesBar from '@/components/DImagesBar'
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import createImage from '@/functions/createImage'
import useAdmin from '@/uses/useAdmin'
import useWatch from '@/uses/useWatch'

export default {
  name: 'DImagesItem',
  components: {
    DIcon,
    DImagesBar
  },
  props,
  setup (props, context) {
    const { src } = toRefs(props)

    const height = ref(undefined)
    const width = ref(undefined)

    const propSrc = useWatch(src, async data => {
      const image = await createImage(src.value)

      if (image) {
        data.value = `url('${image.src}')`
        height.value = Math.floor(image.height * 10 / image.width)
        width.value = Math.floor(image.width * 10 / image.height)
      } else {
        data.value = null
        height.value = null
        width.value = null
      }
    })

    const binds = computed(() => {
      return {
        class: {
          [`emphasize-${props.emphasize}`]: props.emphasize,
          'status-selected': props.selected
        },
        style: {
          '--it-height': height.value,
          '--it-width': width.value
        },
        'data-value': props.value,
        'data-height': height.value,
        'data-width': width.value
      }
    })
    const styleBody = computed(() => {
      return { 'background-image': propSrc.value }
    })

    useAdmin('d-images-item', context)

    return {
      binds,
      styleBody
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-images-item {
  @include imagesItemInit;
}
</style>
