<template>
  <d-dialog
    :title="file?.text"
    :open="open"
    :persistent="true"
    :dense="true"
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
