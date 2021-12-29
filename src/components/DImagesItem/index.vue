<template>
  <div v-bind="binds" class="d-images-item a-static">
    <a v-bind="$attrs" class="d-images-item__body">
      <slot/>
    </a>
    <d-images-bar
      v-if="text || title"
      :item="item"
      :value="value"
      :title="title"
      :text="text"
    />
  </div>
</template>

<script>
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import useWatch from '@/uses/useWatch'
import createImage from '@/functions/createImage'
import useAdmin from '@/uses/useAdmin'
import DImagesBar from '@/components/DImagesBar'

export default {
  name: 'DImagesItem',
  inheritAttrs: false,
  components: { DImagesBar },
  props,
  setup (props, context) {
    const { src } = toRefs(props)

    const width = ref(undefined)

    const propSrc = useWatch(src, async data => {
      const image = await createImage(src.value)

      if (image) {
        data.value = `url('${image.src}')`
        width.value = image.width * 10 / image.height + 'px'
      } else {
        data.value = null
        width.value = null
      }
    })

    const binds = computed(() => {
      return {
        class: {
          [`emphasize-${props.emphasize}`]: props.emphasize
        },
        style: {
          '--it-src': propSrc.value,
          '--it-width': width.value
        },
        'data-value': props.value
      }
    })

    useAdmin('d-images-item', context)

    return {
      binds
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
