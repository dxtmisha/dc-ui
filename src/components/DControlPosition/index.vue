<template>

</template>

<script>
import getIdElement from '@/functions/getIdElement'

export default {
  name: 'DControlPosition',
  props: {
    // Status
    disabled: Boolean,

    // Options
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup (props) {
    const id = `p--${getIdElement()}`

  }
}
</script>

<style lang="scss">

</style>
