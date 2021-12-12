<template>
  <div
    v-if="propThumbnail"
    class="d-redaction-file"
    :style="styleList"
  >
    <img
      ref="image"
      class="d-redaction-file__image"
      :alt="text"
      :src="propThumbnail"
      draggable="false"
      @load="onLoad"
    />
    <d-control-resize
      :value="propValue"
      :disabled="disabled"
      @on-resize="onResize"
    />
    <template v-if="load">
      <div class="d-redaction-file__slider rf-bottom">
        <d-slider
          :value="sliderBottom"
          :disabled="disabled"
          :multiple="true"
          @on-input="onSlider($event, 'bottom')"
        />
      </div>
      <div class="d-redaction-file__slider rf-right">
        <d-slider
          :value="sliderRight"
          :disabled="disabled"
          :multiple="true"
          :vertical="true"
          @on-input="onSlider($event, 'right')"
        />
      </div>
    </template>
  </div>
</template>

<script>
import DControlResize from '@/components/DControlResize'
import DSlider from '@/components/DSlider'
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import getFileResult from '@/functions/getFileResult'
import useWatch from '@/uses/useWatch'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DRedactionFile',
  components: {
    DControlResize,
    DSlider
  },
  props,
  emits: ['on-resize'],
  setup (props, context) {
    const {
      value,
      thumbnail
    } = toRefs(props)

    const load = ref(false)
    const naturalHeight = ref(undefined)
    const naturalWidth = ref(undefined)

    const propValue = useWatch(value, data => {
      data.value = value.value
    })

    const propThumbnail = useWatch(thumbnail, async data => {
      if (thumbnail.value) {
        if (thumbnail.value instanceof File) {
          data.value = await getFileResult(thumbnail.value)
        } else {
          data.value = thumbnail.value
        }
      }
    })

    const sliderBottom = computed(() => [
      parseInt(propValue.value?.[3]) || 0,
      100 - (parseInt(propValue.value?.[1]) || 0)
    ])
    const sliderRight = computed(() => [
      parseInt(propValue.value?.[2]) || 0,
      100 - (parseInt(propValue.value?.[0]) || 0)
    ])

    const styleList = computed(() => {
      return {
        'background-image': `url(${propThumbnail.value})`,
        '--_rf-aspect': `${naturalWidth.value}/${naturalHeight.value}`,
        '--_rf-height': `${naturalHeight.value}px`
      }
    })

    const onLoad = ({ target }) => {
      naturalHeight.value = target.naturalHeight
      naturalWidth.value = target.naturalWidth
      load.value = true
    }
    const onResize = event => {
      propValue.value = event.coordinator
      context.emit('on-resize', event)
    }
    const onSlider = (event, type) => {
      const coordinator = Array.isArray(propValue.value) ? [...propValue.value] : [0, 0, 0, 0]

      switch (type) {
        case 'bottom':
          coordinator[3] = event.value?.[0]
          coordinator[1] = 100 - event.value?.[1]
          break
        case 'right':
          coordinator[2] = event.value?.[0]
          coordinator[0] = 100 - event.value?.[1]
          break
      }

      propValue.value = coordinator
      context.emit('on-resize', { coordinator })
    }

    useAdmin('d-redaction-file', context)

    return {
      propValue,
      propThumbnail,
      load,
      sliderBottom,
      sliderRight,
      styleList,
      onLoad,
      onResize,
      onSlider
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-redaction-file {
  @include redactionFileInit;
}
</style>
