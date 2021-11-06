<template>
  <span> {{ icon }} / {{ disabled }} / {{ hide }} </span>
</template>

<script>
export default {
  name: 'DIconItem',
  props: {
    // Values
    icon: [File, String],
    // Status
    disabled: Boolean,
    hide: Boolean
  }
}
</script>

<style scoped>

</style>
