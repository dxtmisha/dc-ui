<template>
  <label
    :class="classList"
    @dragover.prevent.stop="onDragover"
    @dragenter.prevent.stop="onDragenter"
    @dragleave.prevent.stop="onDragleave"
    @drop.prevent.stop="onDrop"
  >
    <slot/>
    <input
      ref="input"
      class="d-drop__input"
      :disabled="disabled"
      type="file"
      multiple
      :accept="accept"
      @click="onFocus"
      @change="onChange"
    />
  </label>
</template>

<script>
import { computed, ref } from 'vue'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DDrop',
  props: {
    // Values
    accept: String,

    // Status
    disabled: Boolean
  },
  emits: ['on-drop'],
  setup (props, context) {
    const input = ref(undefined)

    const enter = ref(false)
    const files = ref(undefined)

    const classList = computed(() => {
      return {
        'd-drop': true,
        'status-enter': enter.value && !props.disabled,
        'status-disabled': props.disabled
      }
    })

    const emit = () => context.emit('on-drop', { files: files.value })
    const open = () => input.value.click()

    const onFocus = () => {
      input.value.value = ''
      input.value.files = null
    }
    const onChange = () => {
      files.value = input.value.files
      emit()
    }
    const onDragover = () => {
    }
    const onDragenter = () => {
      enter.value = true
    }
    const onDragleave = () => {
      enter.value = false
    }
    const onDrop = ({ dataTransfer }) => {
      if (!props.disabled) {
        enter.value = false
        files.value = dataTransfer.files
        emit()
      }
    }

    useAdmin('d-drop', context)

    return {
      input,
      classList,
      open,
      onFocus,
      onChange,
      onDragover,
      onDragenter,
      onDragleave,
      onDrop
    }
  }
}
</script>

<style lang="scss">
@import "style";

.d-drop {
  @include dropInit;
}
</style>
