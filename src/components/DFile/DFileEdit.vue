<template>
  <d-dialog
    :dense="true"
    :open="open"
    :persistent="true"
    :title="file?.text"
    window-width="1366px"
    @on-click="onClick"
  >
    <d-redaction-file
      ref="file"
      class="d-file__edit"
      v-bind="file"
      :value="file?.coordinator"
    />
  </d-dialog>
</template>

<script>
import DDialog from '@/components/DDialog'
import DRedactionFile from '@/components/DRedactionFile'

export default {
  name: 'DFileEdit',
  components: {
    DDialog,
    DRedactionFile
  },
  props: {
    file: Object,
    open: Boolean
  },
  emits: ['on-input'],
  methods: {
    onClick ({ value }) {
      this.$emit('on-input', value !== 'cancel' ? this.$refs.file.propValue : -1)
    }
  }
}
</script>

<style lang="scss"></style>
