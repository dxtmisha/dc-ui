<template>
  <div v-bind="binds" class="d-avatar">
    <input :name="name" :value="json" type="hidden">
    <div
      ref="image"
      class="d-avatar__image"
      @mousedown.prevent.stop="onMousedown"
      @touchstart.prevent.stop="onMousedown"
    >
      <d-icon-item
        v-bind="bindIcon"
        @on-load="onLoad"
      />
    </div>
    <div v-if="!readonly" class="d-avatar__slider">
      <d-slider-picker
        :disabled="disabled || !propValue.file"
        :max="maxZoom"
        :min="100"
        :value="propValue.zoom"
        @on-input="onZoom"
        @on-change="onZoomChange"
      />
      <d-button
        v-if="!readonly"
        :disabled="disabled"
        :icon="iconImage"
        adaptive="icon"
        appearance="text-color"
        class="d-avatar__button"
        tag="label"
      >
        <input ref="file" type="file" accept="image/*" @input="onInput">
      </d-button>
    </div>
  </div>
</template>

<script>
import DButton from '../DButton'
import DIconItem from '../DIconItem'
import DSliderPicker from '../DSliderPicker'
import { props } from './props'
import { computed, ref, toRefs } from 'vue'
import useAdmin from '../../uses/useAdmin'
import usePosition from './usePosition'
import useWatch from '../../uses/useWatch'

export default {
  name: 'DAvatar',
  components: {
    DButton,
    DIconItem,
    DSliderPicker
  },
  props,
  emit: ['on-input'],
  setup (props, context) {
    const { value } = toRefs(props)

    const image = ref(undefined)
    const file = ref(undefined)
    const size = ref({})

    const files = ref(undefined)

    const propValue = useWatch(value, () => {
      return {
        file: undefined,
        zoom: 100,
        x: 50,
        y: 50,
        ...value.value
      }
    }, ['init'], undefined, true)
    const json = computed(() => JSON.stringify(propValue.value))

    const {
      propValidationMessage,
      setChange,
      checkValidity,
      emit,
      onMousedown
    } = usePosition(
      image,
      props,
      propValue,
      context,
      size
    )

    const binds = computed(() => {
      return {
        class: {
          'status-disabled': props.disabled,
          [`shape-${props.shape}`]: props.shape
        },
        style: {
          '--av-width': props.width,
          '--av-height': props.height || props.width
        }
      }
    })

    const bindIcon = computed(() => {
      return {
        icon: propValue.value.file,
        zoom: `${propValue.value.zoom}%`,
        x: `${propValue.value.x}%`,
        y: `${propValue.value.y}%`,
        disabled: props.disabled
      }
    })

    const onLoad = image => {
      size.value = image
    }
    const onZoom = ({ value }) => {
      propValue.value.zoom = value
    }
    const onZoomChange = () => emit()
    const onFile = () => file.value.click()
    const onInput = event => {
      propValue.value.file = event.target.files?.[0]
      files.value = [event.target.files?.[0]]
      emit()

      event.target.value = ''
    }

    useAdmin('d-avatar', context)

    return {
      image,
      file,
      files,
      json,
      propValidationMessage,
      propValue,
      binds,
      bindIcon,
      setChange,
      checkValidity,
      onMousedown,
      onLoad,
      onZoom,
      onZoomChange,
      onFile,
      onInput
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-avatar {
  @include avatarInit;
}
</style>
