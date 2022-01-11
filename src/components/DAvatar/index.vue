<template>
  <div></div>
</template>

<script>
import { props } from '@/components/DAvatar/props'
import useAdmin from '@/uses/useAdmin'

export default {
  name: 'DAvatar',
  props,
  setup (props, context) {
    useAdmin('d-avatar')
    return {}
  }
}
</script>

<style lang="scss">

</style>
