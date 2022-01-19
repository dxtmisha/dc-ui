<template>
  <div
    v-if="propThumbnail"
    :style="styleList"
    class="d-redaction-file"
  >
    <d-icon-item :icon="propThumbnail"/>
    <img
      ref="image"
      :alt="text"
      :src="propThumbnail"
      class="d-redaction-file__image"
      draggable="false"
      @load="onLoad"
    />
    <d-control-resize
      :disabled="disabled"
      :value="propValue"
      @on-resize="onResize"
    />
  </div>
</template>

<script>
import DControlResize from './../DControlResize'
import DIconItem from './../DIconItem'
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import getFileResult from './../../functions/getFileResult'
import useAdmin from './../../uses/useAdmin'
import useWatch from './../../uses/useWatch'

export default {
  name: 'DRedactionFile',
  components: {
    DControlResize,
    DIconItem
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

    const styleList = computed(() => {
      return {
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

    useAdmin('d-redaction-file', context)

    return {
      propValue,
      propThumbnail,
      load,
      styleList,
      onLoad,
      onResize
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
