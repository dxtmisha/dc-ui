<template>

</template>

<script>
export default {
  name: 'DTextareaAutosize',
  inheritAttrs: false,
  props: {
    value: String
  },
  emits: ['on-input', 'on-change'],
  setup (props) {
    return {}
  }
}
</script>

<style lang="scss">
@import "style";

.d-textarea-autosize {
  @include textareaAutosizeInit;
}
</style>
